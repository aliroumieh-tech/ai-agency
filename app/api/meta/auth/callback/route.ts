import { NextResponse } from "next/server";
import { firebaseAdmin } from "../../../../../lib/firebaseAdmin";
import { META } from "@/lib/config";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");
	const provider = searchParams.get("provider") || "facebook";

	if (!code) {
		return NextResponse.json(
			{ error: "Missing authorization code." },
			{ status: 400 }
		);
	}

	try {
		let clientId, clientSecret, redirectUri;
		if (provider === "instagram") {
			clientId = "974077931475302";
			clientSecret = process.env.INSTAGRAM_CLIENT_SECRET || META.CLIENT_SECRET;
			// Must match the frontend redirect_uri exactly, including provider param
			redirectUri = "https://agencyroumieh.vercel.app/api/meta/auth/callback";
		} else {
			clientId = "539027055632321";
			clientSecret = process.env.FACEBOOK_CLIENT_SECRET || META.CLIENT_SECRET;
			redirectUri = "https://agencyroumieh.vercel.app/api/meta/auth/callback";
		}

		if (!clientId || !clientSecret || !redirectUri) {
			throw new Error("Missing required Meta API environment variables.");
		}

		const isInstagram = provider === "instagram";

		const tokenUrl = isInstagram
			? "https://api.instagram.com/oauth/access_token"
			: `https://graph.facebook.com/v19.0/oauth/access_token`;

		// Exchange the code for an access token
		let tokenResponse;
		if (isInstagram) {
			tokenResponse = await fetch(tokenUrl, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					client_id: clientId,
					client_secret: clientSecret,
					grant_type: "authorization_code",
					redirect_uri: redirectUri,
					code,
				}),
			});
		} else {
			tokenResponse = await fetch(
				`${tokenUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
					redirectUri
				)}&client_secret=${clientSecret}&code=${code}`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
					next: { revalidate: 0 },
				}
			);
		}

		if (!tokenResponse.ok) {
			const errorText = await tokenResponse.text();
			return NextResponse.redirect(
				new URL(
					`/dashboard?status=error&message=token_exchange_failed_${errorText}`,
					request.url
				)
			);
		}

		const tokenData = await tokenResponse.json();
		const accessToken = tokenData.access_token;
		const expiresIn = tokenData.expires_in || 0;

		// Get user info
		let userRes;
		if (isInstagram) {
			userRes = await fetch(
				`https://graph.instagram.com/me?fields=id,username,account_type&access_token=${accessToken}`
			);
		} else {
			userRes = await fetch(
				`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
			);
		}

		if (!userRes.ok) {
			return NextResponse.redirect(
				new URL("/dashboard?status=error&message=user_data_failed", request.url)
			);
		}

		const userData = await userRes.json();
		const userId = process.env.TEST_USER_ID || "test-user-123";

		const metaConnectionsRef = firebaseAdmin
			.firestore()
			.collection("metaConnections");

		// Check if connection already exists
		const existingSnapshot = await metaConnectionsRef
			.where("metaUserId", "==", userData.id)
			.limit(1)
			.get();

		if (!existingSnapshot.empty) {
			// Update existing document
			const docRef = existingSnapshot.docs[0].ref;
			await docRef.update({
				userId,
				accessToken,
				tokenExpiry: Date.now() + expiresIn * 1000,
				name: userData.name,
				email: userData.email || "test",
				updatedAt: new Date(),
			});
		} else {
			// Create a new document
			await metaConnectionsRef.add({
				userId,
				metaUserId: userData.id,
				accessToken,
				tokenExpiry: Date.now() + expiresIn * 1000,
				name: userData.name,
				email: userData.email || "test",
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		return NextResponse.redirect(
			new URL("/dashboard?status=connected", request.url)
		);
	} catch (error) {
		return NextResponse.redirect(
			new URL(
				`/dashboard?status=error&message=unexpected_error_${error}`,
				request.url
			)
		);
	}
}

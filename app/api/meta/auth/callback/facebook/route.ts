import { NextResponse } from "next/server";
import { firebaseAdmin } from "../../../../../../lib/firebaseAdmin";
import { META } from "@/lib/config";

export async function GET(request: Request) {
	const { searchParams, pathname } = new URL(request.url);
	const code = searchParams.get("code");

	if (!code) {
		return NextResponse.json(
			{ error: "Missing authorization code." },
			{ status: 400 }
		);
	}

	// Determine provider by redirect URI path
	// Example: /api/meta/auth/callback/facebook or /api/meta/auth/callback/instagram
	const isFacebook = pathname.includes("facebook");

	try {
		if (isFacebook) {
			// Facebook App credentials
			const clientId = META.CLIENT_ID;
			const clientSecret = META.CLIENT_SECRET;
			const redirectUri =
				"https://agencyroumieh.vercel.app/api/meta/auth/callback/facebook";

			if (!clientId || !clientSecret || !redirectUri) {
				throw new Error("Missing required Meta API environment variables.");
			}

			// Exchange the code for a Facebook access token (short-lived)
			const fbTokenRes = await fetch(
				`https://graph.facebook.com/v19.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
					next: { revalidate: 0 },
				}
			);
			if (!fbTokenRes.ok) {
				const errorText = await fbTokenRes.text();
				return NextResponse.redirect(
					new URL(
						`/dashboard?status=error&message=fb_token_failed_${errorText}`,
						request.url
					)
				);
			}
			const fbTokenData = await fbTokenRes.json();
			const fbAccessToken = fbTokenData.access_token;

			// Exchange for a long-lived Facebook access token
			const fbLongLivedRes = await fetch(
				`https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${fbAccessToken}`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}
			);
			if (!fbLongLivedRes.ok) {
				const errorText = await fbLongLivedRes.text();
				return NextResponse.redirect(
					new URL(
						`/dashboard?status=error&message=fb_long_lived_failed_${errorText}`,
						request.url
					)
				);
			}
			const fbLongLivedData = await fbLongLivedRes.json();
			const fbLongLivedToken = fbLongLivedData.access_token;
			const fbExpiresIn = fbLongLivedData.expires_in || 0;

			// Get Facebook user info
			const userRes = await fetch(
				`https://graph.facebook.com/me?fields=id,name,email&access_token=${fbLongLivedToken}`
			);
			if (!userRes.ok) {
				return NextResponse.redirect(
					new URL(
						"/dashboard?status=error&message=user_data_failed",
						request.url
					)
				);
			}
			const userData = await userRes.json();

			const userId = process.env.TEST_USER_ID || "test-user-123";
			const metaConnectionsRef = firebaseAdmin
				.firestore()
				.collection("metaConnections");

			// Check if FB connection already exists
			const existingSnapshot = await metaConnectionsRef
				.where("metaUserId", "==", userData.id)
				.limit(1)
				.get();

			const fbDataToStore = {
				userId,
				metaUserId: userData.id,
				accessToken: fbLongLivedToken,
				tokenExpiry: Date.now() + fbExpiresIn * 1000,
				name: userData.name,
				email: userData.email || "test",
				createdAt: new Date(),
				updatedAt: new Date(),
			};

			if (!existingSnapshot.empty) {
				// Update existing FB document
				const docRef = existingSnapshot.docs[0].ref;
				const { createdAt, ...updateData } = fbDataToStore;
				await docRef.update(updateData);
			} else {
				// Create a new FB document
				await metaConnectionsRef.add(fbDataToStore);
			}

			return NextResponse.redirect(
				new URL("/dashboard?status=connected_fb", request.url)
			);
		}

		return NextResponse.redirect(
			new URL("/dashboard?status=error&message=unknown_provider", request.url)
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

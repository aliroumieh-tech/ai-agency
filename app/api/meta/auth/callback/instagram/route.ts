import { NextResponse } from "next/server";
import { firebaseAdmin } from "../../../../../../lib/firebaseAdmin";

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
	const isInstagram = pathname.includes("instagram");

	try {
		if (isInstagram) {
			// Instagram App credentials
			const clientIdIG = "974077931475302";
			const clientSecretIG = "83d07abd15bc4ea2e9af9e123bf8d80f";
			const redirectUriIG =
				"https://agencyroumieh.vercel.app/api/meta/auth/callback/instagram";

			// Exchange the code for an Instagram access token (short-lived)
			const igTokenRes = await fetch(
				"https://api.instagram.com/oauth/access_token",
				{
					method: "POST",
					body: new URLSearchParams({
						client_id: clientIdIG,
						client_secret: clientSecretIG,
						grant_type: "authorization_code",
						redirect_uri: redirectUriIG,
						code,
					}),
				}
			);
			if (!igTokenRes.ok) {
				const error = await igTokenRes.json();
				throw new Error(
					`Instagram OAuth failed: ${error.error_message || error.error}`
				);
			}
			const igTokenData = await igTokenRes.json();
			const igAccessToken = igTokenData.access_token;

			// Exchange for a long-lived Instagram access token
			const igLongLivedRes = await fetch(
				`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${clientSecretIG}&access_token=${igAccessToken}`,
				{
					method: "GET",
					headers: { Accept: "application/json" },
				}
			);
			if (!igLongLivedRes.ok) {
				const errorText = await igLongLivedRes.text();
				throw new Error(`IG long-lived token failed: ${errorText}`);
			}
			const igLongLivedData = await igLongLivedRes.json();
			const igLongLivedToken = igLongLivedData.access_token;
			const igLongLivedExpiresIn = igLongLivedData.expires_in || 0;

			// Get Instagram user info
			const userResIG = await fetch(
				`https://graph.instagram.com/me?fields=id,username,account_type&access_token=${igLongLivedToken}`
			);
			if (!userResIG.ok) {
				return NextResponse.redirect(
					new URL(
						"/dashboard?status=error&message=ig_user_data_failed",
						request.url
					)
				);
			}
			const userDataIG = await userResIG.json();

			const userId = process.env.TEST_USER_ID || "test-user-123";
			const igUsersRef = firebaseAdmin.firestore().collection("igUsers");

			// IG users collection
			const igUserSnapshot = await igUsersRef
				.where("igUserId", "==", userDataIG.id)
				.limit(1)
				.get();

			const igDataToStore = {
				userId,
				igUserId: userDataIG.id,
				igAccessToken: igLongLivedToken,
				igTokenExpiry: Date.now() + igLongLivedExpiresIn * 1000,
				igUsername: userDataIG.username,
				igAccountType: userDataIG.account_type,
				createdAt: new Date(),
				updatedAt: new Date(),
			};

			if (!igUserSnapshot.empty) {
				// Update existing IG document
				const docRef = igUserSnapshot.docs[0].ref;
				await docRef.update({ ...igDataToStore, createdAt: undefined });
			} else {
				// Create a new IG document
				await igUsersRef.add(igDataToStore);
			}

			return NextResponse.redirect(
				new URL("/dashboard?status=connected_ig", request.url)
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

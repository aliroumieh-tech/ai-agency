import { NextResponse } from "next/server";
import { supabase, type MetaConnection } from "@/lib/supabase";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	if (!code) {
		return NextResponse.json(
			{ error: "Missing authorization code." },
			{ status: 400 }
		);
	}

	try {
		// Meta app credentials - should be in environment variables in production
		const clientId = "539027055632321";
		const clientSecret = "76ef5de16dc66e83c87aeb19ec71e430";
		const redirectUri =
			"https://agencyroumieh.vercel.app/api/meta/auth/callback";

		// Exchange the code for an access token
		const tokenResponse = await fetch(
			`https://graph.facebook.com/v19.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
				next: { revalidate: 0 },
			}
		);

		if (!tokenResponse.ok) {
			const errorText = await tokenResponse.text();
			console.error("Token exchange failed:", tokenResponse.status, errorText);
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

		// Get user info using the access token
		const userRes = await fetch(
			`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
		);

		if (!userRes.ok) {
			const errorText = await userRes.text();
			console.error("User data fetch failed:", userRes.status, errorText);
			return NextResponse.redirect(
				new URL("/dashboard?status=error&message=user_data_failed", request.url)
			);
		}

		const userData = await userRes.json();
		console.log("🔐 User data:", userData);

		// Get a mock user ID (in a real app, you would get this from your auth system)
		// For this example, we'll use a fixed user ID
		const userId = process.env.TEST_USER_ID || "test-user-123";

		// Save the connection to Supabase
		const metaConnection: MetaConnection = {
			user_id: userId,
			meta_user_id: userData.id,
			access_token: accessToken,
			token_expiry: Date.now() + expiresIn * 1000,
			name: userData.name,
			email: userData.email,
		};

		const { error } = await supabase
			.from("meta_connections")
			.upsert(metaConnection, {
				onConflict: "meta_user_id",
				ignoreDuplicates: false,
			});

		if (error) {
			console.error("Supabase error:", error);
			return NextResponse.redirect(
				new URL("/dashboard?status=error&message=database_error", request.url)
			);
		}

		// Then redirect the user to the dashboard with success status
		return NextResponse.redirect(
			new URL("/dashboard?status=connected", request.url)
		);
	} catch (error) {
		console.error("Meta auth callback error:", error);
		return NextResponse.redirect(
			new URL("/dashboard?status=error&message=unexpected_error", request.url)
		);
	}
}

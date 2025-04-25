import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	if (!code) {
		return NextResponse.json(
			{ error: "Missing authorization code." },
			{ status: 400 }
		);
	}

	console.log("🔐 Auth code received:", code);

	// Exchange the code for an access token
	const tokenResponse = await fetch(
		"https://graph.facebook.com/v19.0/oauth/access_token",
		{
			method: "GET",
			headers: { "Content-Type": "application/json" },
			// Replace with your actual client_id, client_secret, and redirect_uri
			// The redirect_uri must match the one used in the login button/link
			next: { revalidate: 0 },
		}
	);

	console.log("🔐 Token response:", tokenResponse);

	const tokenData = await tokenResponse.json();
	const accessToken = tokenData.access_token;
	// const expiresIn = tokenData.expires_in;

	// Get user info using the access token
	const userRes = await fetch(
		`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
	);
	const userData = await userRes.json();

	console.log("🔐 User data:", userData);

	// Example: save to database
	// await db.client.upsert({
	// 	where: { fbUserId: userData.id },
	// 	update: {
	// 		accessToken,
	// 		name: userData.name,
	// 		email: userData.email,
	// 		tokenExpiry: Date.now() + expiresIn * 1000,
	// 	},
	// 	create: {
	// 		fbUserId: userData.id,
	// 		accessToken,
	// 		name: userData.name,
	// 		email: userData.email,
	// 		tokenExpiry: Date.now() + expiresIn * 1000,
	// 	},
	// });

	// Then redirect the user to the dashboard or success page
	return NextResponse.redirect(
		new URL("/dashboard?status=connected", request.url)
	);
}

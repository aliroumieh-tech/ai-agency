import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	// Handle the OAuth code here
	console.log("Auth code received:", code);

	// Process code, exchange for access token, etc.

	// Redirect to success page
	return NextResponse.redirect(
		new URL("/dashboard?status=connected", request.url)
	);
}

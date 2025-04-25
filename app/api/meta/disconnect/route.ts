import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
	try {
		// Get user ID (in a real app, you would get this from your auth system)
		// For this example, we'll use a fixed user ID
		const userId = process.env.TEST_USER_ID || "test-user-123";

		// Delete the connection from Supabase
		const { error } = await supabase
			.from("meta_connections")
			.delete()
			.eq("user_id", userId);

		if (error) {
			console.error("Error disconnecting Meta account:", error);
			return NextResponse.json(
				{ error: "Failed to disconnect Meta account." },
				{ status: 500 }
			);
		}

		// Optional: Revoke the access token with Meta's API
		// This would require additional API calls to Meta

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error in disconnect endpoint:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred." },
			{ status: 500 }
		);
	}
}

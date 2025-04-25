import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import crypto from "crypto";

export async function POST() {
	try {
		// Get user ID (in a real app, you would get this from your auth system)
		// For this example, we'll use a fixed user ID
		const userId = process.env.TEST_USER_ID || "test-user-123";

		// Generate a confirmation code
		const confirmationCode = crypto
			.randomBytes(4)
			.toString("hex")
			.toUpperCase();

		// 1. Delete from meta_connections table
		const { error: connectionError } = await supabase
			.from("meta_connections")
			.delete()
			.eq("user_id", userId);

		if (connectionError) {
			console.error("Error deleting Meta connections:", connectionError);
			return NextResponse.json(
				{ error: "Failed to delete Meta connections." },
				{ status: 500 }
			);
		}

		// 2. Optional: Delete any other Meta-related data
		// Example if you have other tables:
		// await supabase.from('meta_posts').delete().eq('user_id', userId);
		// await supabase.from('meta_analytics').delete().eq('user_id', userId);

		// 3. Create deletion record for audit/compliance
		const { error: logError } = await supabase.from("deletion_logs").insert({
			user_id: userId,
			service: "meta",
			confirmation_code: confirmationCode,
			deleted_at: new Date().toISOString(),
		});

		if (logError) {
			// Non-critical error, just log it but still return success
			console.error("Error logging deletion:", logError);
		}

		return NextResponse.json({
			success: true,
			confirmationCode,
			message: "All Meta data has been permanently deleted.",
		});
	} catch (error) {
		console.error("Error in data deletion endpoint:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred during data deletion." },
			{ status: 500 }
		);
	}
}

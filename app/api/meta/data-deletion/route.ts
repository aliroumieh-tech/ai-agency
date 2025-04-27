import { NextResponse } from "next/server";
import crypto from "crypto";
import { firebaseAdmin } from "../../../../lib/firebaseAdmin";

export async function POST() {
	try {
		const userId = process.env.TEST_USER_ID || "test-user-123";

		const confirmationCode = crypto
			.randomBytes(4)
			.toString("hex")
			.toUpperCase();

		// 1. Delete from metaConnections
		const snapshot = await firebaseAdmin
			.firestore()
			.collection("metaConnections")
			.where("userId", "==", userId)
			.get();

		const batch = firebaseAdmin.firestore().batch();
		snapshot.forEach((doc) => batch.delete(doc.ref));
		await batch.commit();

		// 2. Create deletion record
		try {
			await firebaseAdmin.firestore().collection("deletionLogs").add({
				userId,
				service: "meta",
				confirmationCode,
				deletedAt: new Date(),
				createdAt: new Date(),
			});
		} catch (error) {
			console.error("Error logging deletion:", error);
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

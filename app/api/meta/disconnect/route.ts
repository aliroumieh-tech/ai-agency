import { NextResponse } from "next/server";
import { admin } from "../../../../lib/firebaseAdmin";

export async function POST() {
	try {
		const userId = process.env.TEST_USER_ID || "test-user-123";

		const snapshot = await admin
			.firestore()
			.collection("metaConnections")
			.where("userId", "==", userId)
			.get();

		const batch = admin.firestore().batch();
		snapshot.forEach((doc) => batch.delete(doc.ref));
		await batch.commit();

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error in disconnect endpoint:", error);
		return NextResponse.json(
			{ error: "An unexpected error occurred." },
			{ status: 500 }
		);
	}
}

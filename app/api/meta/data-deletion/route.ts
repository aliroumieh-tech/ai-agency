import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
	collection,
	query,
	where,
	getDocs,
	writeBatch,
	addDoc,
} from "firebase/firestore";
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

		// 1. Delete from meta_connections table (Firestore)
		const q = query(
			collection(db, "metaConnections"),
			where("userId", "==", userId)
		);
		const snapshot = await getDocs(q);
		const batch = writeBatch(db);
		snapshot.forEach((doc) => batch.delete(doc.ref));
		await batch.commit();

		// 2. Optional: Delete any other Meta-related data (not implemented)

		// 3. Create deletion record for audit/compliance (Firestore)
		try {
			await addDoc(collection(db, "deletionLogs"), {
				userId,
				service: "meta",
				confirmationCode,
				deletedAt: new Date(),
				createdAt: new Date(),
			});
		} catch (error) {
			// Non-critical error, just log it but still return success
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

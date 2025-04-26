import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
	collection,
	query,
	where,
	getDocs,
	writeBatch,
} from "firebase/firestore";

export async function POST() {
	try {
		// Get user ID (in a real app, you would get this from your auth system)
		// For this example, we'll use a fixed user ID
		const userId = process.env.TEST_USER_ID || "test-user-123";

		// Delete the connection using Firestore
		const q = query(
			collection(db, "metaConnections"),
			where("userId", "==", userId)
		);
		const snapshot = await getDocs(q);
		const batch = writeBatch(db);
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

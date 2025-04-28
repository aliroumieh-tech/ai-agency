import { NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // your Firebase Firestore client
import {
	collection,
	getDocs,
	query,
	where,
	updateDoc,
	doc,
} from "firebase/firestore";

export async function POST() {
	try {
		// Fetch connections about to expire (within next 7 days)
		const now = Date.now();
		const sevenDaysLater = now + 7 * 24 * 60 * 60 * 1000;

		const q = query(
			collection(db, "meta_connections"),
			where("token_expiry", "<", sevenDaysLater)
		);
		const snapshot = await getDocs(q);

		if (snapshot.empty) {
			console.log("No tokens need refreshing.");
			return NextResponse.json({ message: "No tokens need refresh." });
		}

		const clientId = process.env.META_CLIENT_ID!;
		const clientSecret = process.env.META_CLIENT_SECRET!;

		const refreshedTokens = [];

		for (const docSnap of snapshot.docs) {
			const connection = docSnap.data();
			const connectionRef = doc(db, "meta_connections", docSnap.id);

			const url = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${connection.access_token}`;

			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				console.error("Token refresh failed for", connection.meta_user_id);
				continue;
			}

			const refreshed = await response.json();
			const newExpiry =
				Date.now() + (refreshed.expires_in || 60 * 24 * 60 * 60) * 1000;

			await updateDoc(connectionRef, {
				access_token: refreshed.access_token,
				token_expiry: newExpiry,
			});

			refreshedTokens.push({
				user_id: connection.user_id,
				meta_user_id: connection.meta_user_id,
				new_access_token: refreshed.access_token,
			});

			console.log(`✅ Token refreshed for ${connection.meta_user_id}`);
		}

		return NextResponse.json({
			message: "Tokens refreshed successfully",
			refreshed: refreshedTokens,
		});
	} catch (error) {
		console.error("Error refreshing tokens:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}

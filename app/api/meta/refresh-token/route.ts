import { NextResponse } from "next/server";
import { firebaseAdmin } from "@/lib/firebaseAdmin"; // your existing firebaseAdmin import

export async function POST() {
	try {
		const now = Date.now();
		const sevenDaysLater = now + 7 * 24 * 60 * 60 * 1000;

		const metaConnectionsRef = firebaseAdmin
			.firestore()
			.collection("metaConnections");

		// Fetch connections that need refresh
		const snapshot = await metaConnectionsRef
			.where("tokenExpiry", "<", sevenDaysLater)
			.get();

		if (snapshot.empty) {
			console.log("No tokens need refreshing.");
			return NextResponse.json({ message: "No tokens need refresh." });
		}

		const clientId = "539027055632321";
		const clientSecret = "76ef5de16dc66e83c87aeb19ec71e430";

		const refreshedTokens = [];

		for (const docSnap of snapshot.docs) {
			const connection = docSnap.data();
			const docRef = docSnap.ref;

			const url = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${connection.accessToken}`;

			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				console.error("Token refresh failed for", connection.metaUserId);
				continue;
			}

			const refreshed = await response.json();
			const newExpiry =
				Date.now() + (refreshed.expires_in || 60 * 24 * 60 * 60) * 1000;

			await docRef.update({
				accessToken: refreshed.access_token,
				tokenExpiry: newExpiry,
				updatedAt: new Date(),
			});

			refreshedTokens.push({
				userId: connection.userId,
				metaUserId: connection.metaUserId,
				newAccessToken: refreshed.access_token,
			});

			console.log(`✅ Token refreshed for ${connection.metaUserId}`);
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

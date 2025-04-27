// utils/firebaseAdmin.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { FIREBASE_ADMIN } from "./config";

export const serviceAccount = {
	type: FIREBASE_ADMIN.TYPE,
	project_id: "agency-7e955",
	private_key_id: FIREBASE_ADMIN.PRIVATE_KEY_ID,
	private_key: FIREBASE_ADMIN.PRIVATE_KEY,
	client_email: FIREBASE_ADMIN.CLIENT_EMAIL,
	client_id: FIREBASE_ADMIN.CLIENT_ID,
	auth_uri: FIREBASE_ADMIN.AUTH_URI,
	token_uri: FIREBASE_ADMIN.TOKEN_URI,
	auth_provider_x509_cert_url: FIREBASE_ADMIN.AUTH_PROVIDER_X509_CERT_URL,
	client_x509_cert_url: FIREBASE_ADMIN.CLIENT_X509_CERT_URL,
	universe_domain: FIREBASE_ADMIN.UNIVERSE_DOMAIN,
};

if (!getApps().length) {
	initializeApp({
		credential: cert(serviceAccount),
	});
}

export const admin = {
	firestore: getFirestore,
};

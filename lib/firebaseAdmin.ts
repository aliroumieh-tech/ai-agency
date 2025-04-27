// utils/firebaseAdmin.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export interface ServiceAccount {
	type: string;
	project_id: string;
	private_key_id: string;
	private_key: string;
	client_email: string;
	client_id: string;
	auth_uri: string;
	token_uri: string;
	auth_provider_x509_cert_url: string;
	client_x509_cert_url: string;
	universe_domain: string;
}

export const serviceAccount = {
	type: process.env.NEXT_PUBLIC_FIREBASE_TYPE!,
	project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
	private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID!,
	private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!,
	client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL!,
	client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID!,
	auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URI!,
	token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URI!,
	auth_provider_x509_cert_url:
		process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_X509_CERT_URL!,
	client_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_X509_CERT_URL!,
	universe_domain: process.env.NEXT_PUBLIC_FIREBASE_UNIVERSE_DOMAIN!,
};

if (!getApps().length) {
	initializeApp({
		credential: cert(serviceAccount as ServiceAccount),
	});
}

export const admin = {
	firestore: getFirestore,
};

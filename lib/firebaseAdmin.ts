// utils/firebaseAdmin.ts
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import * as serviceAccount from "../service_acount.json";
import * as admin from "firebase-admin";

// interface Params {
// 	type: string;
// 	projectId: string;
// 	privateKeyId: string;
// 	privateKey: string;
// 	clientEmail: string;
// 	clientId: string;
// 	authUri: string;
// 	tokenUri: string;
// 	authProviderX509CertUrl: string;
// 	clientC509CertUrl: string;
// }

// const params = {
// 	type: serviceAccount.type,
// 	projectId: serviceAccount.project_id,
// 	privateKeyId: serviceAccount.private_key_id,
// 	privateKey: serviceAccount.private_key,
// 	clientEmail: serviceAccount.client_email,
// 	clientId: serviceAccount.client_id,
// 	authUri: serviceAccount.auth_uri,
// 	tokenUri: serviceAccount.token_uri,
// 	authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
// 	clientC509CertUrl: serviceAccount.client_x509_cert_url,
// };

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
		credential: cert(serviceAccount as admin.ServiceAccount),
	});
}

export const firebaseAdmin = {
	firestore: getFirestore,
};

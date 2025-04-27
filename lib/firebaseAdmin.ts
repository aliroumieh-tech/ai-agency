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
//
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
	type: "service_account",
	project_id: "agency-7e955",
	private_key_id: "2a4db7e9eb092e0fb90fedbce2ca9f090dff61da",
	private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTTa9Z9nnME635\nwkhNTqf5MkUvPx4L/t81PJsTGOJmETTbgQ7e0U8hJvrO9iHab5yYhIA4SryMTJC6\nP5K4FyLDUh71AdPIA4UzsrcYWY1tWI4nHjTRcMPvrAZp8n1pwA76IhHuTvGv8qp7\nhxTo+5a/63RX64OfOHqiaFNRDh6HlkUk8pKkCM7cFiNt/m+4y7X/zUPTbuoHk3P5\n2AzFFbPv4yJjXPpLYBu42ot2Gf5F7bcHkr6ElgkxvyNtj7/Uu6PzcmnthYDyCKsR\nQAZQTBOWFSXwVF1YAHCaO+RzJ7YBcZitSbxpkB1zJXiBhuqL7PXROtpYFxrToGg7\nUCam4qmNAgMBAAECggEALDYucOvd6yHY/o+0khxZkA4BJNQXhNoEuP5f0hycTk/e\nV+lGg7+Wx3CA/OnKBorg4Jakv2J/1fk1NQsVN1h76RNXL9t8hPabmcgUgE9IhK8J\nO00aLxJhpNXBF8zpicVqPNMBHnQ9JJvpKOSILwFpNunck4LPLPLj0fRzLlv+bk7U\nxyUcccjdW1Mn6a3picRLhRs7ac081A0pfDHg0tJc7wS7pJKeAIAmVtWDyZ1hQxdr\nf0Nf9hB9RJBbLgWeI6AsL3T5dQjj9UWOw+ci9CNGpP5ktDH7C8EYY31Uic6B44YR\npBxrXjedkjGqSUX8NfngbhbX6jHzJgjlc3+fTe7nAQKBgQD4y7QAWN0ksQBlTPB/\nYDhrrMiyQzWfFY9RS36Kgq8GNIhBLhNpvHc8M9krBg6yEcubTsPpxWCSYeJmGajE\nBNmvFQ0+w3vFBAunc4WiZcim/UTJ64fnEjqdm/Uwyugc4SE3jlye+Nvjbx128bU1\nme6A7s0NOWMYZ1nt4znuMhulDQKBgQDZbA48SXwNHGkpPwMk4KOLtvLl31TO/u9z\nDd9k16z7UEGxLRr+Q9agh8MFCAawTtE7ayphTsQLCymO7/OjZmV73NCOC3+LqsBU\nXFdmbARBHvNeoXnDQnAL3fl8YoJYijcZLROG7WxYYBDFiE8irHMv1mQ+Gsadu0EL\no2fpLUL2gQKBgQDFqfGkpPVthULvOKWKTYQF6Ay7tDIR5isrR3ON0C4GHA502oqJ\n4zZIGllbmUBrsT+2cGmufSYwppwcyh4PPltEgtE3IFBhQsmPjHSLhZpZMbdJRVt/\n9jejqJiw30RyTVr6rJxhoQ3yMAGU0oxJvbaDsTYwX3ufk90a5wDLgfv8sQKBgF4b\nBPZXIBhUqbeujF/T0zXP08ZnKcAGXAHCiWSObVLBZA2Z5ksTdbw5xtFQrgR1uN4s\n/kTr4LKe/Dff5+ZblaVM5//zPhtnpqNc7H9qVVUSXmghICDBitm4FBogUSadfEer\nWP5XmUOPIPM+knIBjkGwW+b9k+YFfJva+EjWzFsBAoGBAJNQZEscriWpfNf9XAyV\nw67zetlkQf5uO+R16p/en3gwef8Ic2EPuteEgwl8DTmPYtFIQVq8h8k8K3pOLgvf\nJghyJx7RkvafY4PGVEfhz3y55PDf2TPAnYNQtK1caxJDNMyuWmL1SEyEzDkS16rX\nNSLjX7Wfpm55i8yvr/4smidr\n-----END PRIVATE KEY-----\n`,
	client_email: "firebase-adminsdk-fbsvc@agency-7e955.iam.gserviceaccount.com",
	client_id: "115371747462049212299",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40agency-7e955.iam.gserviceaccount.com",
	universe_domain: "googleapis.com",
};

if (!getApps().length) {
	initializeApp({
		credential: cert(serviceAccount as admin.ServiceAccount),
	});
}

export const firebaseAdmin = {
	firestore: getFirestore,
};

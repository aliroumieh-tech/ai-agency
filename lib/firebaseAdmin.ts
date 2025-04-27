// utils/firebaseAdmin.ts
import {
	initializeApp,
	cert,
	getApps,
	ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = {
	type: "service_account",
	project_id: "agency-7e955",
	private_key_id: "e3bdf0918c0f4677869a2971f5b572d5dc334377",
	private_key:
		"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLANAscU5DicsH\ncwmjWqmNGIWDbKo/SVZm1j0vKHadR9P/iRkCEZGxKWp4s/CRauqHD+yhCT3lh2mq\nzqyNMWXnz7PnYcNjdmrRGa41hdrBFUModnbypPoOsMlnnXTT9Y6XmWtDm4qcXBZ4\nAEpCPZdNwNtpgqBfVWXs//L8BVywMaTH2O/AxZNvDXPDK81xLRNnTUUOn9tbR1se\nnI/dPF0oZeAdaPZSw09XkJD0svmbr458+uVyz6h1Csf5XPImNRTbMRqFZ7AE06I2\nFozsh3XJoH0VTLw3hzZcr6lTY6Y2FaBshOOvJ8/sWp0d+TjAV4b9B87VDvO3dsno\niBf5Nzu3AgMBAAECggEAF4HXmV3hhzacmRc8JXtpKNqPE2Hw8PUoGS5z1VMlMR9R\nMEUK7U9lhJNcLfAASoaL8+nnJ9qvHTYqCUp3dr4io85Mcd3DR3A9/Eqx/qaqZzN0\nHGpjacOq5SqZl/MGxUipI2rzndeUHHkZbPnzn2oMbEeJ4NTshz2XWPNmisKAMjLI\nqZoJHarn817juzkItuhn2/5MBk3yKWg3o8cFq7yCp+u+bYvuQe8fe/5qXBYxOdWs\nwoGCijpRla/Ach0ad90d14+NUiCjz5ayPIfmPB4/uUh4xj7EuTGoYWJvmDkNZLwd\nDTjpja/F5pdATqO9AgKnfz08cDqmqtxgo24e03tD6QKBgQDna6/hqQCJvAVXEUvz\ngp7oipIuMEIA0u4ok+E684uTUSjA1DzN1rHYqDNd1jWwyS33J4WEzSc755pUfoEn\nzkGhxPNPJuVmHaWG6kbzKHfvPa58ZcPQsc+xkzqG42YcENrWH8ZCgVh1ZJ1nqKMw\ndAtc1W7GCRCRH+WBWkVZXNUFNQKBgQDgkHTuH7rdBwhG/gSOEXcIz+gwli3NVMIB\nH4oiQQTwarTC8t8NEHJulcw8pgs494PDhJuyW3vV1Ud+pmxRG68dyXOi5nz2AFPt\nYLiI//zpB3gW7OB99W2F1MxNJ629fomhrIOSFH/KlD+5sg3SZrAqft/Ija+N9JoJ\ng+ELiR52uwKBgEI1fwZy0aKWVnjIjBBJKKmjK5tnVxrhPh4B4Qh6sU4ehChXEGZb\nrFouFTQdmxLPHAWAGyUZhMYQxwixgMYgropXzLyyhiMnDDqDQHVE+LtLzGXuv40v\nsho94xrAaHBTKijkwlY4p1Q+ywHjL30nVjDjJ2QlJ8Y9d+4AI6MjehaZAoGAQAnR\n3oob3qX/vUb5A46FdHTdkOVywEg4Xtugp64E+45iZ+mco/wZteFv8aekMaWb5Kiv\nQciG4u7ESaCp6ONNJ+Bn4n96CSkExf+8AA2IEOf5XghE6IaRqgWKEUKMcCpik0E/\n7+t6mcl29ryI5oQ0Hpo5tNZ6xq+HMcly5rg+gLsCgYEAyCK7HicNScVWBhJ/bWCE\nZXRq3fyFZFbyUstXIvHcky32QPawbJ6w+Vgd8qFkhiW0PU3Ea6e4f4j8rheHUJAv\ny4uLRKaeVkB405XU5Ex6e9j1yVYyvxabmyG3WrmecpRXrJ5ByrUpxZXozZdodn8d\n90yxL39HUqvRq+Uu9Lrivds=\n-----END PRIVATE KEY-----\n",
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
		credential: cert(serviceAccount as ServiceAccount),
	});
}

export const admin = {
	firestore: getFirestore,
};

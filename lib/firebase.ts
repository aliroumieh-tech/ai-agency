import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCbpKp1BqiUiO1k6m17iUn9J4SoIFGx1PI",
	authDomain: "agency-7e955.firebaseapp.com",
	projectId: "agency-7e955",
	storageBucket: "agency-7e955.firebasestorage.app",
	messagingSenderId: "600153104688",
	appId: "1:600153104688:web:0521a9fa15ad8b292da8f5",
	measurementId: "G-PGLV79EEGR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

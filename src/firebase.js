import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCek-ByRPyWDZYwfieqZ4OTskBIl7iDfdw",
    authDomain: "saarthi-tourism.firebaseapp.com",
    projectId: "saarthi-tourism",
    storageBucket: "saarthi-tourism.firebasestorage.app",
    messagingSenderId: "345138727040",
    appId: "1:345138727040:web:f80cbc166fccb33834be65",
    measurementId: "G-6ER0Z2L299"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export default app
export default app;

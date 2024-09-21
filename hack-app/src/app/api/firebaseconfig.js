import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbgfbNpV8DX17jMaCwzKSqtKcgiVDsGWI",
    authDomain: "canacintra-662d3.firebaseapp.com",
    projectId: "canacintra-662d3",
    storageBucket: "canacintra-662d3.appspot.com",
    messagingSenderId: "780004852282",
    appId: "1:780004852282:web:69b76b5093e0d1e98feb03",
    measurementId: "G-WDFNQRY44F"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
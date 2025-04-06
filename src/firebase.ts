// firebase.ts or lib/firebase.ts (wherever you're initializing Firebase)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyCDFAid0WNovTOZYGeY7u8-HS4L3Q1XAOo",
  authDomain: "bookeasy-593c7.firebaseapp.com",
  projectId: "bookeasy-593c7",
  storageBucket: "bookeasy-593c7.firebasestorage.app",
  messagingSenderId: "520583196064",
  appId: "1:520583196064:web:4f98751b59038321aa88c5",
  measurementId: "G-9BWP0YDE6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Add this line

export { auth, db };

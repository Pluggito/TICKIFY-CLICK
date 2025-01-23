// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD53zTsuF-3bB6YR0aC4noAmt4GAd70Fio",
  authDomain: "tickify-88e27.firebaseapp.com",
  projectId: "tickify-88e27",
  storageBucket: "tickify-88e27.firebasestorage.app",
  messagingSenderId: "874828922225",
  appId: "1:874828922225:web:92660bc3e43ffeb47dcad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db };
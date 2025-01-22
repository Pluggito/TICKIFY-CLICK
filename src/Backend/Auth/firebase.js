// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUxwkQnj1hNmU1xo1AjZfNq_qks5TqHOY",
  authDomain: "tikkify-click.firebaseapp.com",
  projectId: "tikkify-click",
  storageBucket: "tikkify-click.firebasestorage.app",
  messagingSenderId: "414117404808",
  appId: "1:414117404808:web:b833ba30c6770720657f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, auth, db };
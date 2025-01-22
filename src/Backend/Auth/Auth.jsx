import { auth, db } from "./firebase";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  sendEmailVerification,
  applyActionCode,
} from "firebase/auth";

// Sign Up Function
export const signUp = async (email, password, firstName, lastName) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const userRef = doc(db, "Users", userCred.user.uid);
  const userData = {
    firstName,
    lastName,
    email,
    emailVerified: false,
    createdAt: new Date().toISOString(),
  };
  await setDoc(userRef, userData);
  await sendEmailVerification(auth.currentUser);
  return userCred;
};

// Login Function
export const logIn = (email, password) => 
  signInWithEmailAndPassword(auth, email, password);

// Google Sign In
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userCred = await signInWithPopup(auth, provider);
  const userRef = doc(db, "Users", userCred.user.uid);
  const userData = {
    firstName: userCred.user.displayName?.split(' ')[0] || '',
    lastName: userCred.user.displayName?.split(' ')[1] || '',
    email: userCred.user.email,
    emailVerified: userCred.user.emailVerified,
    createdAt: new Date().toISOString(),
  };
  await setDoc(userRef, userData, { merge: true });
  return userCred;
};

// Sign Out
export const signOut = () => auth.signOut();

// Password Reset
export const forgetPassword = (email) => 
  sendPasswordResetEmail(auth, email, {
    url: "http://localhost:5173/login", // Or your production URL
  });

// Reset Password
export const resetPassword = (oobCode, newPassword) => 
  confirmPasswordReset(auth, oobCode, newPassword);

// Email Verification
export const sendConfirmEmail = () => 
  sendEmailVerification(auth.currentUser);

// Verify Email
export const verifyEmail = async (oobCode, navigate) => {
  await applyActionCode(auth, oobCode);
  if (auth.currentUser) {
    const userRef = doc(db, "Users", auth.currentUser.uid);
    await updateDoc(userRef, { emailVerified: true });
    return "Email verified successfully";
  }
  navigate("/login");
  return "Email verified. Please log in.";
};

import { initializeApp } from 'firebase/app';
import { initializeAuth, indexedDBLocalPersistence, browserPopupRedirectResolver, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);

export const auth = initializeAuth(app, {
  persistence: indexedDBLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});

export const googleProvider = new GoogleAuthProvider();

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firestore connection successful");
  } catch (error) {
    console.error("Firestore initialization error:", error);
    if (error instanceof Error) {
      if (error.message.includes('the client is offline')) {
        console.error("Please check your Firebase configuration or network.");
      }
      if (error.message.includes('not-found') || error.message.includes('NOT_FOUND')) {
        console.warn("Database or connection document may not exist, but backend reached.");
      }
    }
  }
  
  // Handle any pending redirect login result quietly
  try {
    const redirectResult = await getRedirectResult(auth);
    if (redirectResult) {
      console.log("Redirect sign-in successful:", redirectResult.user.email);
    }
  } catch (redirectError) {
    console.error("Pending redirect result error or code:", redirectError);
  }
}
testConnection();

let isSigningIn = false;

export const signInWithGoogle = async () => {
  if (isSigningIn) {
    console.warn("Sign-in already in progress, avoiding duplicate trigger.");
    return null;
  }
  isSigningIn = true;
  console.log("Attempting Google Sign In...");
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Login successful:", result.user.email);
    isSigningIn = false;
    return result;
  } catch (error: any) {
    isSigningIn = false;
    const errorCode = error?.code || '';
    const errorMessage = error?.message || '';

    // Gentle handling for user closure and cancelled popup request
    if (
      errorCode === 'auth/popup-closed-by-user' ||
      errorMessage.includes('popup-closed-by-user') ||
      errorCode === 'auth/cancelled-popup-request' ||
      errorMessage.includes('cancelled-popup-request')
    ) {
      console.log("Sign-in popup closed or cancelled by user. Standard flow aborted gently.");
      return null;
    }

    // Gentle handling for blocked popups - fallback nicely to redirect
    if (
      errorCode === 'auth/popup-blocked' ||
      errorMessage.includes('popup-blocked')
    ) {
      console.warn("Popup blocked by user browser. Switching silently to Redirect Sign-In...");
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectError) {
        console.error("Redirect fallback failed:", redirectError);
      }
      return null;
    }

    // Now for actual unexpected system/auth errors we log and handle
    console.error("Unexpected Login Error:", error);
    if (errorMessage.includes('auth/unauthorized-domain')) {
      alert("Domain Unauthorized: Add " + window.location.hostname + " to Firebase Authorized Domains.");
    } else {
      console.log("Unknown popup error. Attempting silent fallback to Redirect mode...");
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectErr) {
        console.error("Redirect fallback failed:", redirectErr);
        alert("Login failed: " + errorMessage);
      }
    }
    return null;
  }
};

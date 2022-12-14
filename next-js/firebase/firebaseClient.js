import { initializeApp, getApps } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


console.log(!getApps().length);

if (!getApps().length) {
  initializeApp(clientCredentials);
  console.log("Firebase has been init successfully");
}

const db = getFirestore();
const auth = getAuth();

const provider = new GithubAuthProvider();

export {db, auth, provider};

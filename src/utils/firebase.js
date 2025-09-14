// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlir_-GZpMZ2rLR8tY6V8CjT_ZShW-TI",
  authDomain: "netflix-gpt-cbb30.firebaseapp.com",
  projectId: "netflix-gpt-cbb30",
  storageBucket: "netflix-gpt-cbb30.firebasestorage.app",
  messagingSenderId: "444054202303",
  appId: "1:444054202303:web:6543ca3daa4f7b5b2ae30a",
  measurementId: "G-ZSNNRCPTJQ"
};

// ✅ Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Pass app to getAuth
export const auth = getAuth(app);

// Optional: use analytics only in browser environment
if (typeof window !== "undefined") {
  getAnalytics(app);
}
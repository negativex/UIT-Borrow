// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6KhU2H0cjFLm-IVBunSNOtz0oQ9_YwCo",
  authDomain: "appuit-27c9e.firebaseapp.com",
  projectId: "appuit-27c9e",
  storageBucket: "appuit-27c9e.appspot.com",
  messagingSenderId: "372198220209",
  appId: "1:372198220209:web:1143b4f79e55c3d9c75d90",
  measurementId: "G-R35XP1BCNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth = getAuth();

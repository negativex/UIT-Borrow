// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {get, getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6KhU2H0cjFLm-IVBunSNOtz0oQ9_YwCo",
  authDomain: "appuit-27c9e.firebaseapp.com",
  databaseURL: "https://appuit-27c9e-default-rtdb.firebaseio.com",
  projectId: "appuit-27c9e",
  storageBucket: "appuit-27c9e.appspot.com",
  messagingSenderId: "372198220209",
  appId: "1:372198220209:web:e04c74c0b12d55c7c75d90",
  measurementId: "G-8ZXH55SDM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import dotenv from 'dotenv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// dotenv.config();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-8dccd.firebaseapp.com",
  projectId: "blog-8dccd",
  storageBucket: "blog-8dccd.appspot.com",
  messagingSenderId: "1071550267656",
  appId: "1:1071550267656:web:78599b88978549edc22cbd",
  measurementId: "G-YXHNK5STKL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


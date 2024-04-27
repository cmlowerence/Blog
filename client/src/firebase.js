import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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


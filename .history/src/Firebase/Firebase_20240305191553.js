// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC29LyWKd7qIXfj-HBkwlVlHezLR88dWjA",
  authDomain: "instagram-clone-7b48e.firebaseapp.com",
  projectId: "instagram-clone-7b48e",
  storageBucket: "instagram-clone-7b48e.appspot.com",
  messagingSenderId: "94556235646",
  appId: "1:94556235646:web:464da9e2ea8e2bac6f352f",
  measurementId: "G-SKXXQ5LHRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
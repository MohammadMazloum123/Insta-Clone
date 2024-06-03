// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
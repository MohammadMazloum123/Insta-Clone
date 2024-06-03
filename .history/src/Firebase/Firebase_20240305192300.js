import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC29LyWKd7qIXfj-HBkwlVlHezLR88dWjA",
    authDomain: "instagram-clone-7b48e.firebaseapp.com",
    projectId: "instagram-clone-7b48e",
    storageBucket: "instagram-clone-7b48e.appspot.com",
    messagingSenderId: "94556235646",
    appId: "1:94556235646:web:464da9e2ea8e2bac6f352f",
    measurementId: "G-SKXXQ5LHRE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export  {app, auth, fireStore, storage};

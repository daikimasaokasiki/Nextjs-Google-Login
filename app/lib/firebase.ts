import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBptM-cw_Iyll3N4itWHk_qEf8rXkJpRQA",
    authDomain: "nextjs--login-f8701.firebaseapp.com",
    projectId: "nextjs--login-f8701",
    storageBucket: "nextjs--login-f8701.appspot.com",
    messagingSenderId: "1007248058515",
    appId: "1:1007248058515:web:e33d176fa481a6c2d40566"
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();

import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqosYC9orJdHs5FwuTyFgnVoz4YrebQio",
  authDomain: "nextchat-74b4c.firebaseapp.com",
  projectId: "nextchat-74b4c",
  storageBucket: "nextchat-74b4c.appspot.com",
  messagingSenderId: "318484011499",
  appId: "1:318484011499:web:7c6ed20320d962752921ae",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4hJ3NKev-fz4N1sk_Db61XdD55M3pAiU",
  authDomain: "selale-cafe-reservation-system.firebaseapp.com",
  projectId: "selale-cafe-reservation-system",
  storageBucket: "selale-cafe-reservation-system.firebasestorage.appspot.com",
  messagingSenderId: "226863217894",
  appId: "1:226863217894:web:5b4e83b8377190aa030f27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

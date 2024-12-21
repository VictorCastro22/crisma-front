import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT05uzlvmg6WG8GOZlcaJnRSn6quJ1RLQ",
  authDomain: "crisma-71ae3.firebaseapp.com",
  projectId: "crisma-71ae3",
  storageBucket: "crisma-71ae3.firebasestorage.app",
  messagingSenderId: "867037668772",
  appId: "1:867037668772:web:6c541b2e9c2585a5218d31",
  measurementId: "G-ECW3T5D865"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db }
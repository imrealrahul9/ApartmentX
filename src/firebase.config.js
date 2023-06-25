// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfReuE7C5g2oC1pqdDZsyB4J60feeqVCI",
  authDomain: "house-market-ab86c.firebaseapp.com",
  projectId: "house-market-ab86c",
  storageBucket: "house-market-ab86c.appspot.com",
  messagingSenderId: "813531467456",
  appId: "1:813531467456:web:63999610ec80c09e1f2725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
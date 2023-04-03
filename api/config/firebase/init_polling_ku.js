import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWp80YPTxVWCSd0tTrL4TTUjD-b_AOqGs",
    authDomain: "polling-ku.firebaseapp.com",
    projectId: "polling-ku",
    storageBucket: "polling-ku.appspot.com",
    messagingSenderId: "662807726001",
    appId: "1:662807726001:web:f21b8ff264cf9b81545f90",
    measurementId: "G-KXS8SQ8THN"
  };
   
export const firebase = initializeApp(firebaseConfig, 'polling-ku');

export const database = getFirestore(firebase)
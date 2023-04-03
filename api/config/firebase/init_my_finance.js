import { initializeApp, fi } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const myFinanceConfig = {
  apiKey: "AIzaSyBOYk2a0ZuLTCrZ7jlvxlNYzGbDmkjSZ8I",
  authDomain: "my-finance-bb1b3.firebaseapp.com",
  projectId: "my-finance-bb1b3",
  storageBucket: "my-finance-bb1b3.appspot.com",
  messagingSenderId: "162758934409",
  appId: "1:162758934409:web:dd2b9ee06aaddc92686b58",
  measurementId: "G-TR2VGLTWBW"
};

export const firebase = initializeApp(myFinanceConfig, 'my-finance');

export const database = getFirestore(firebase);
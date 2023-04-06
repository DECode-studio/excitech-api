const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// const { getMessaging } = require("firebase/messaging");

const pollingKuConfig = {
    apiKey: "AIzaSyDWp80YPTxVWCSd0tTrL4TTUjD-b_AOqGs",
    authDomain: "polling-ku.firebaseapp.com",
    projectId: "polling-ku",
    storageBucket: "polling-ku.appspot.com",
    messagingSenderId: "662807726001",
    appId: "1:662807726001:web:f21b8ff264cf9b81545f90",
    measurementId: "G-KXS8SQ8THN"
  };

  const firebase = initializeApp(pollingKuConfig, 'polling-ku');
  
  const database = getFirestore(firebase);
  // const messaging = getMessaging(firebase);
  
  module.exports = {
    firebase,
    database,
  }
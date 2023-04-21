const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const quranKuConfig = {
    apiKey: "AIzaSyCBQaOASOvLC2NDzYduHV5RAlj-exU8u6g",
    authDomain: "qur-an-ku.firebaseapp.com",
    projectId: "qur-an-ku",
    storageBucket: "qur-an-ku.appspot.com",
    messagingSenderId: "907437227127",
    appId: "1:907437227127:web:01d32fa3a6003e3ca25a72",
    measurementId: "G-VW9HDGB7NN"
  };

  const firebase = initializeApp(quranKuConfig, 'quran-ku');
  
  const database = getFirestore(firebase);
  
  module.exports = {
    firebase,
    database,
  }
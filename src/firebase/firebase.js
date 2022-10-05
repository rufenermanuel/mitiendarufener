// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmZ7rAd-bmcEC5xdZ_3svPHNSlyvVG4Pc",
  authDomain: "cursoreactrufener.firebaseapp.com",
  projectId: "cursoreactrufener",
  storageBucket: "cursoreactrufener.appspot.com",
  messagingSenderId: "533071995200",
  appId: "1:533071995200:web:038bc1026a0a2390229aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
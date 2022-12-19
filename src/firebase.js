// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlyvHMK0jtK19Qyub2Jco1i2MojgYEobc",
  authDomain: "twitter-clone-ca5f6.firebaseapp.com",
  projectId: "twitter-clone-ca5f6",
  storageBucket: "twitter-clone-ca5f6.appspot.com",
  messagingSenderId: "454503253514",
  appId: "1:454503253514:web:f2434add673467340e41f3",
  measurementId: "G-LKQ33S7XWW"
};

// Initialize Firebase 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

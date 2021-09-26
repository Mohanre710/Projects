// Import the functions you need from the SDKs you need
// import { auth, firestore,initializeApp } from "firebase/app";

import firebase, { auth, firestore } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFOwfFnFDpLwpSrnXJ0nRD2ZowZWjieOQ",
  authDomain: "angular-clone-12437.firebaseapp.com",
  projectId: "angular-clone-12437",
  storageBucket: "angular-clone-12437.appspot.com",
  messagingSenderId: "262070827206",
  appId: "1:262070827206:web:96b63dbbc44ab853523fc7",
  measurementId: "G-BTJCWBS941"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firestore(firebaseApp);

const myAuth = auth(firebaseApp);

export{db,myAuth};
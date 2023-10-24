// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB74AMKChkLq5tu1VUvBh2IOAk3UUiEeuI",
  authDomain: "react-e52c3.firebaseapp.com",
  projectId: "react-e52c3",
  storageBucket: "react-e52c3.appspot.com",
  messagingSenderId: "678898002038",
  appId: "1:678898002038:web:b5ca6e6472d3f1c7fe5757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
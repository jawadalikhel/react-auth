 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBa4OGNfHAU0mIxLxUeFqUlB10VCjueH-I",
  authDomain: "expense-app-63d50.firebaseapp.com",
  projectId: "expense-app-63d50",
  storageBucket: "expense-app-63d50.appspot.com",
  messagingSenderId: "316446577353",
  appId: "1:316446577353:web:f69770367954a489a4f318",
  measurementId: "G-ZBMVBCX3EZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

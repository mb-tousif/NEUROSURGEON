// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPZUDha8Isd85eAyOxW-trrmnq2SusqXU",
  authDomain: "assignment-ten-8f5af.firebaseapp.com",
  projectId: "assignment-ten-8f5af",
  storageBucket: "assignment-ten-8f5af.appspot.com",
  messagingSenderId: "746733312037",
  appId: "1:746733312037:web:3b4c674f5a76359a1407cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDzHUNLoakx3hKS0zuPGZplLSkPGdEKh-A",

  authDomain: "universityofwollongong-94264.firebaseapp.com",

  projectId: "universityofwollongong-94264",

  storageBucket: "universityofwollongong-94264.appspot.com",

  messagingSenderId: "805660554887",

  appId: "1:805660554887:web:c9d74d5a92c567b179ea22",

  measurementId: "G-2G4F3R27H8"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

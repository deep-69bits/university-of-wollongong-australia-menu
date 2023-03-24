// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmb3OuTeoyzEVsJmEzH2LXlteIGzha4T8",
  authDomain: "ihousecafeteria.firebaseapp.com",
  projectId: "ihousecafeteria",
  storageBucket: "ihousecafeteria.appspot.com",
  messagingSenderId: "365064100422",
  appId: "1:365064100422:web:ab04d2ed9cc9d3c35dc847",
  measurementId: "G-MZ1D0Z05HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

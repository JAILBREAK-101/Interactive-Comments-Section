// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiMozEPMTNvmbFN3PtGHAdKmeSsyOUNQo",
  authDomain: "comment-section-9e5ec.firebaseapp.com",
  projectId: "comment-section-9e5ec",
  storageBucket: "comment-section-9e5ec.appspot.com",
  messagingSenderId: "981920737766",
  appId: "1:981920737766:web:c57168bbffabe9ab5e8e27",
  measurementId: "G-L8XPV56WJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider } from "firebase/auth"; //for authorisation

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtIYbLhC4jFkExZhwjih7dri3bBktoz-Q",
  authDomain: "media-content-platfrom.firebaseapp.com",
  projectId: "media-content-platfrom",
  storageBucket: "media-content-platfrom.appspot.com",
  messagingSenderId: "285787733435",
  appId: "1:285787733435:web:7d8196028ae0053b12589e",
  measurementId: "G-LHYB2G28RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider};
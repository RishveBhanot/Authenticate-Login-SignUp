// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz_JLAZakwI5HEkSyZ3w0BRNjY88KhGG4",
  authDomain: "rishve-login.firebaseapp.com",
  projectId: "rishve-login",
  storageBucket: "rishve-login.firebasestorage.app",
  messagingSenderId: "160779225038",
  appId: "1:160779225038:web:68e5ca6b64ba56709a4d9f",
  measurementId: "G-6VVT8DWB3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
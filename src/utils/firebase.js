// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-2dJHUNqD7w05pwyP2u0PvNlJxMPmXvE",
  authDomain: "netflixgpt-57eab.firebaseapp.com",
  projectId: "netflixgpt-57eab",
  storageBucket: "netflixgpt-57eab.appspot.com",
  messagingSenderId: "1023709228972",
  appId: "1:1023709228972:web:d4891d035acb25ee529409",
  measurementId: "G-9GDLC3HM81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
     
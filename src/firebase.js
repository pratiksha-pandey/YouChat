import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDVobuvo1DQGBI5XVEKMnvVZ2T2voXWq-E",
  authDomain: "youchat-3a6e3.firebaseapp.com",
  projectId: "youchat-3a6e3",
  storageBucket: "youchat-3a6e3.appspot.com",
  messagingSenderId: "1071314391493",
  appId: "1:1071314391493:web:5b86814d0fdb32c63f7bac"
}).auth();
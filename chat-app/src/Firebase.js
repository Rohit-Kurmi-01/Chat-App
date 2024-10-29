// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_pzwG9WFAK7-gB-Ax6cxxQX4oVKFY78",
  authDomain: "chat-1c0a1.firebaseapp.com",
  projectId: "chat-1c0a1",
  storageBucket: "chat-1c0a1.appspot.com",
  messagingSenderId: "787205355771",
  appId: "1:787205355771:web:287a2dd8811519c557d85e",
  measurementId: "G-TMGVGBZM0Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();
export const storage = getStorage();
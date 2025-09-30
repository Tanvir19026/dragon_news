// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0f00m0u-HzRKzaEm6cE9SA_JGocjGqE",
  authDomain: "dragon-news-aae83.firebaseapp.com",
  projectId: "dragon-news-aae83",
  storageBucket: "dragon-news-aae83.firebasestorage.app",
  messagingSenderId: "354669867101",
  appId: "1:354669867101:web:a6c629b216e010f2d69db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPVKscxKb_R6L0ff9BmYzgFm8YKpj-csA",
  authDomain: "tazez-7a9ae.firebaseapp.com",
  projectId: "tazez-7a9ae",
  storageBucket: "tazez-7a9ae.firebasestorage.app",
  messagingSenderId: "963646651565",
  appId: "1:963646651565:web:831652d5b3312cf42eda24",
  measurementId: "G-Y6DHJ5XM9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

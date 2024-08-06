import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFByQnRVlToIV6WyCONlPl7-ZZgPlgdyo",
  authDomain: "finalcoderjae.firebaseapp.com",
  projectId: "finalcoderjae",
  storageBucket: "finalcoderjae.appspot.com",
  messagingSenderId: "962198183655",
  appId: "1:962198183655:web:1557e38c9fbe0cefcc4c42"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './Context/CartContext.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yB0J-zr39xTCPZa0PG_xxy2-6z62-SM",
  authDomain: "michigan-adopciones.firebaseapp.com",
  projectId: "michigan-adopciones",
  storageBucket: "michigan-adopciones.appspot.com",
  messagingSenderId: "942979678037",
  appId: "1:942979678037:web:205c50084ab6128f67b9dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

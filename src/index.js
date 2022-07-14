import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_yEsspyp3vCah0vguCTsHpVW1SSSLngw",
  authDomain: "coder-react-c63f5.firebaseapp.com",
  projectId: "coder-react-c63f5",
  storageBucket: "coder-react-c63f5.appspot.com",
  messagingSenderId: "755989308262",
  appId: "1:755989308262:web:b8155289ffb659abf05ea7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

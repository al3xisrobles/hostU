import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/hero'
import HostGuest from './components/hostguest'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsHuct0Y4E9yHw87rR_judc5tpc8DVpvQ",
  authDomain: "hostu-b9b70.firebaseapp.com",
  projectId: "hostu-b9b70",
  storageBucket: "hostu-b9b70.appspot.com",
  messagingSenderId: "1080444463105",
  appId: "1:1080444463105:web:f225ed446603c4eb523800",
  measurementId: "G-H7P8TW2936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Stack() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
              <Navbar/>
              <Hero/>
              <HostGuest/>
              <Footer/>
            </div>
          }/>
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Stack/> );

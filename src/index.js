import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import "flowbite"
import App from './App';
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <App />
    <Footer/>
  </React.StrictMode>
);

import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles/main.scss';
import HeroSection from './components/HeroSection';
import Header from './components/Header';

import WorkExperience from './components/WorkExperience';
import CraftedExperience from './components/CraftedExperience';

import Contactform from './components/Contactform';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  

  

  
  

  return (
    <div className="main-wrapper">  
      <Header /> 
      <HeroSection />
      <About />
      <WorkExperience />
      <CraftedExperience /> 
      <Contactform />
      <Footer />
    </div>
  );
}

export default App;

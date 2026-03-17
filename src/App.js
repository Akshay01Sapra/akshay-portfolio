import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/styles/main.scss';
import Themetransition from './components/Themetransition';
import UserProfileDataCard from './components/UserProfileDataCard';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';

import WorkExperience from './components/WorkExperience';
import CraftedExperience from './components/CraftedExperience';
import Landingpage from './components/Landingpage';
import Contactform from './components/Contactform';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [pendingTheme, setPendingTheme] = useState(null);
  const [triggerTransition, setTriggerTransition] = useState(false);
  const [previousTheme, setPreviousTheme] = useState(theme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setPreviousTheme(theme);       // Store current before changing
    setTheme(nextTheme);           // Apply new theme immediately
    setTriggerTransition(true);    // Start the animation
  };

  // When animation ends, apply theme
  const handleTransitionEnd = () => {
    if (pendingTheme) {
      setTheme(pendingTheme);
      setPendingTheme(null);
    }
    setTriggerTransition(false);
  };

  return (
    <div className="main-wrapper">
      
      <Header />
      
      <HeroSection />
      
      <About />
      {/* <HeroContent /> */}
      
      <WorkExperience />
      
      {/* crafted experience */}
      
      <CraftedExperience />
      
      {/* <Landingpage /> */}
      
      <Contactform />
      
      {/* footer */}
      
      <Footer />
    </div>
  );
}

export default App;

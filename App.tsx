import React, { useState, useEffect, useRef } from 'react';
import { VibeType, VibeTheme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollString from './components/ScrollString';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const themes: Record<VibeType, VibeTheme> = {
  soft: {
    background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f8faff 100%)',
    balloonGradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    accentColor: '#8ec5fc',
    secondaryColor: '#e0c3fc'
  },
  bright: {
    background: 'radial-gradient(circle at 50% 50%, #fff9fb 0%, #fff0f5 100%)',
    balloonGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    accentColor: '#ff9a9e',
    secondaryColor: '#fecfef'
  },
  bold: {
    background: 'radial-gradient(circle at 50% 50%, #f5f7ff 0%, #e6e9ff 100%)',
    balloonGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accentColor: '#667eea',
    secondaryColor: '#764ba2'
  }
};

const App: React.FC = () => {
  const [activeVibe, setActiveVibe] = useState<VibeType>('soft');
  const appRef = useRef<HTMLDivElement>(null);

  // GSAP Context for global animations if needed
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global Entrance
      gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out" });
    }, appRef);

    return () => ctx.revert();
  }, []);

  const currentTheme = themes[activeVibe];

  return (
    <div 
      ref={appRef}
      className="min-h-screen text-slate-900 transition-colors duration-1000 ease-in-out relative overflow-x-hidden"
      style={{ background: currentTheme.background }}
    >
      <ScrollString color={activeVibe === 'bold' ? '#99a' : '#ddd'} />
      
      {/* Background Ambience */}
      <div 
        className="balloon-blur w-96 h-96 top-[-10%] left-[-10%] opacity-20 animate-pulse duration-[4000ms]"
        style={{ background: currentTheme.accentColor }}
      />
      <div 
        className="balloon-blur w-[500px] h-[500px] bottom-[-10%] right-[-10%] opacity-20"
        style={{ background: currentTheme.secondaryColor }}
      />

      <Navbar />
      
      <main>
        <Hero 
          activeVibe={activeVibe} 
          setActiveVibe={setActiveVibe} 
          theme={currentTheme}
        />
        <HowItWorks />
        <Gallery />
        <Features />
        <Contact activeVibe={activeVibe} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
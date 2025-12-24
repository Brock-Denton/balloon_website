import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2 select-none cursor-pointer">
            <span className="text-3xl animate-bounce" style={{ animationDuration: '3s' }}>🎈</span> VIBE
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-slate-800">
            <a href="#how" className="hover:text-pink-500 transition-colors">Process</a>
            <a href="#gallery" className="hover:text-pink-500 transition-colors">Work</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>

        <button 
          onClick={scrollToContact} 
          className="hidden md:block bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold btn-bounce transition-all hover:bg-pink-500 border border-transparent hover:border-pink-300"
        >
            Book Now
        </button>

        <button className="md:hidden p-2 text-slate-900">
          <Menu />
        </button>
    </nav>
  );
};

export default Navbar;
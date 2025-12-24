import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { VibeType, VibeTheme } from '../types';
import FloatingBalloon from './FloatingBalloon';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  activeVibe: VibeType;
  setActiveVibe: (vibe: VibeType) => void;
  theme: VibeTheme;
}

const Hero: React.FC<HeroProps> = ({ activeVibe, setActiveVibe, theme }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleConfettiHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 15,
      spread: 70,
      origin: { x, y },
      colors: ['#FF7EB3', '#8E54E9', '#4FC3F7'],
      ticks: 200,
      gravity: 1.2,
      scalar: 0.7,
      disableForReducedMotion: true
    });
  };

  return (
    <section ref={containerRef} className="relative pt-20 pb-32 px-6 overflow-visible min-h-[90vh] flex flex-col justify-center">
        {/* Floating Background Balloons */}
        <FloatingBalloon 
          className="-top-20 -left-10 md:left-10 opacity-60"
          colorGradient={theme.balloonGradient}
          scale={0.75}
          rotation={12}
          animationDuration="4s"
        />
        <FloatingBalloon 
          className="top-10 -right-20 md:right-10 opacity-60"
          colorGradient={theme.balloonGradient}
          scale={0.9}
          rotation={-12}
          animationDuration="6s"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 ref={titleRef} className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.9]">
                Instant party vibes. <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    Zero stress.
                </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Weddings, birthdays, corporate parties — we design, deliver, and install so you can just show up and celebrate.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button 
                  onMouseEnter={handleConfettiHover}
                  className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-bold btn-bounce transition-all flex items-center gap-2 hover:bg-pink-600"
                >
                    Check availability
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#gallery" className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold btn-bounce transition-all hover:border-slate-300">
                    See our work
                </a>
            </div>
        </div>

        {/* Vibe Picker */}
        <div className="mt-24 max-w-2xl mx-auto flex flex-col items-center">
            <p className="mono text-[10px] uppercase tracking-[0.3em] mb-4 text-slate-400">Signature Style Picker</p>
            <div className="glass-panel p-2 rounded-2xl flex gap-2 shadow-lg shadow-slate-200/50">
                {(['soft', 'bright', 'bold'] as VibeType[]).map((vibe) => (
                   <button
                    key={vibe}
                    onClick={() => setActiveVibe(vibe)}
                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 capitalize ${
                      activeVibe === vibe 
                        ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                        : 'text-slate-500 hover:bg-white/50'
                    }`}
                   >
                     {vibe} & Classy
                   </button>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Hero;
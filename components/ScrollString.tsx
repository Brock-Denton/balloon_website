import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollStringProps {
  color: string;
}

const ScrollString: React.FC<ScrollStringProps> = ({ color }) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div 
      ref={lineRef}
      className="fixed top-0 right-[20px] md:right-[50px] w-[2px] h-screen z-10 origin-top pointer-events-none"
      style={{ 
        background: `linear-gradient(to bottom, transparent, ${color}, transparent)` 
      }}
    />
  );
};

export default ScrollString;
import React from 'react';

interface FloatingBalloonProps {
  className?: string;
  colorGradient: string;
  delay?: string; // Animation delay
  scale?: number;
  rotation?: number;
  animationDuration?: string;
}

const FloatingBalloon: React.FC<FloatingBalloonProps> = ({ 
  className = '', 
  colorGradient, 
  scale = 1,
  rotation = 0,
  animationDuration = '4s'
}) => {
  return (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ animationDuration: animationDuration }}
    >
      <div 
        className="balloon-real"
        style={{
          background: colorGradient,
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          width: '120px',
          height: '150px'
        }}
      />
    </div>
  );
};

export default FloatingBalloon;
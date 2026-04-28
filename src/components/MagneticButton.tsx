import React, { useRef, useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Particle = ({ angle, distance }: { angle: number; distance: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
      animate={{ 
        scale: [0, 1, 0], 
        x: Math.cos(angle) * distance, 
        y: Math.sin(angle) * distance,
        opacity: [1, 1, 0] 
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute w-1 h-1 bg-accent-green rounded-full shadow-[0_0_8px_rgba(20,200,113,0.8)]"
    />
  );
};

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; angle: number; distance: number }[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });

    setMousePos({
      x: clientX - left,
      y: clientY - top,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      angle: (i * Math.PI * 2) / 8,
      distance: Math.random() * 50 + 50
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.includes(p)));
    }, 600);

    if (onClick) onClick();
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden rounded-sm bg-base-dark/50 backdrop-blur-md border border-accent-green text-white font-sans font-bold uppercase tracking-widest transition-colors duration-300 shadow-[0_0_15px_rgba(20,200,113,0.3)] hover:text-base-dark group flex items-center justify-center ${className}`}
    >
      {/* Background fill on hover */}
      <div 
        className="absolute inset-0 bg-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      ></div>

      {/* Star Burst Particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <div 
            key={particle.id} 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <Particle angle={particle.angle} distance={particle.distance} />
          </div>
        ))}
      </AnimatePresence>

      {/* Tracking Glow inside the button */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-10 w-24 h-24 bg-white/40 blur-xl rounded-full mix-blend-overlay"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}

      {/* Button Content */}
      <div className="relative z-20 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
};

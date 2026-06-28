import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'outline' | 'solid';
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  href,
  onClick,
  variant = 'outline',
  type = 'button',
  target,
  rel,
}) => {
  const baseStyles = 'relative overflow-hidden font-sans font-bold uppercase tracking-[0.12em] transition-all duration-200 group inline-flex items-center justify-center rounded-[12px] border';
  const variants = {
    outline: 'border-accent-blue/32 bg-[#0B1628]/70 text-white hover:border-accent-blue/70 hover:bg-accent-blue/8',
    solid: 'border-accent-orange/45 bg-accent-orange text-[#160b02] shadow-[0_10px_26px_rgba(255,138,28,0.12)] hover:border-accent-orange hover:bg-[#ff9a35]',
  };

  const content = (
    <>
      {variant === 'outline' && (
        <span className="absolute inset-y-2 left-2 w-px bg-accent-blue/50 opacity-80 transition-opacity group-hover:opacity-100" />
      )}

      <span className="relative z-20 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

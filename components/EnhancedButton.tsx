'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnhancedButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function EnhancedButton({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: EnhancedButtonProps) {
  const baseStyles = 'font-semibold rounded-lg inline-flex items-center justify-center relative overflow-hidden group';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/50',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-white border-2 border-white text-black hover:bg-gray-100 hover:border-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-5 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* Glow Effect */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Ripple Container */}
      <span className="relative z-10">{children}</span>

      {/* Glow on Hover */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary opacity-0 blur-xl group-hover:opacity-50"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}

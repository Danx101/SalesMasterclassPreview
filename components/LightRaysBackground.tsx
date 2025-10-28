'use client';

import { motion } from 'framer-motion';

export default function LightRaysBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-[200%] h-[2px] origin-left"
          style={{
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(220, 38, 38, ${0.1 + i * 0.02}) 50%,
              transparent 100%)`,
            transform: `rotate(${(i * 360) / 8}deg)`,
          }}
          animate={{
            rotate: [(i * 360) / 8, (i * 360) / 8 + 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Radial Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%,
            rgba(220, 38, 38, 0.05) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.3) 100%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

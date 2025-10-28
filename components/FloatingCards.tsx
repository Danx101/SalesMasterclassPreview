'use client';

import { motion } from 'framer-motion';

const salesKeywords = [
  { text: "Closing", color: "from-red-500 to-pink-500", delay: 0 },
  { text: "Mindset", color: "from-purple-500 to-indigo-500", delay: 0.2 },
  { text: "Erfolg", color: "from-blue-500 to-cyan-500", delay: 0.4 },
  { text: "Strategien", color: "from-green-500 to-emerald-500", delay: 0.6 },
  { text: "Wachstum", color: "from-yellow-500 to-orange-500", delay: 0.8 },
  { text: "Performance", color: "from-pink-500 to-rose-500", delay: 1.0 },
];

export default function FloatingCards() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
      {salesKeywords.map((keyword, index) => {
        const angle = (index * 360) / salesKeywords.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={keyword.text}
            className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br ${keyword.color} shadow-2xl flex items-center justify-center cursor-pointer`}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
              rotateZ: 0
            }}
            animate={{
              x: [x, x * 1.2, x],
              y: [y, y * 1.2, y],
              opacity: 1,
              scale: 1,
              rotateZ: [0, 10, 0, -10, 0],
            }}
            transition={{
              delay: keyword.delay,
              duration: 0.8,
              x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.2,
              rotateZ: 15,
              zIndex: 10,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <span className="text-white font-bold text-lg sm:text-xl text-center px-2">
              {keyword.text}
            </span>
          </motion.div>
        );
      })}

      {/* Center Glow */}
      <motion.div
        className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

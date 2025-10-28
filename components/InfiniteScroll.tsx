'use client';

import { motion } from 'framer-motion';

const courseModules = [
  { title: "Sales Grundlagen", icon: "📚" },
  { title: "Kundenpsychologie", icon: "🧠" },
  { title: "Einwandbehandlung", icon: "💡" },
  { title: "Closing Techniken", icon: "🎯" },
  { title: "Follow-Up Strategien", icon: "📈" },
  { title: "Verhandlungsführung", icon: "🤝" },
  { title: "Körpersprache", icon: "👔" },
  { title: "Storytelling", icon: "📖" },
];

export default function InfiniteScroll() {
  // Duplicate array for seamless loop
  const duplicatedModules = [...courseModules, ...courseModules];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex gap-6">
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{
            x: [0, -100 * courseModules.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedModules.map((module, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{module.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
    </div>
  );
}

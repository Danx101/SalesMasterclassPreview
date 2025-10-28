'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 1000, suffix: '+', label: 'Zufriedene Teilnehmer', icon: '👥' },
  { value: 40, suffix: '%', label: 'Mehr Abschlüsse', icon: '📈' },
  { value: 95, suffix: '%', label: 'Erfolgsrate', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Support', icon: '💬' },
];

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <motion.div
            className="text-5xl mb-3"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {stat.icon}
          </motion.div>
          <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            <AnimatedCounter from={0} to={stat.value} duration={2} />
            <span className="text-primary">{stat.suffix}</span>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';

interface AnimatedCheckmarkProps {
  delay?: number;
}

export default function AnimatedCheckmark({ delay = 0 }: AnimatedCheckmarkProps) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5, delay },
        opacity: { duration: 0.2, delay }
      }
    }
  };

  return (
    <motion.svg
      className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.path
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
        variants={pathVariants}
      />
    </motion.svg>
  );
}

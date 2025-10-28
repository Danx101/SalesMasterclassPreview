'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

export default function AnimatedCounter({ from, to, duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

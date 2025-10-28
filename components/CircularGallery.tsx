'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Michael Schmidt",
    role: "Sales Manager",
    quote: "Dank Chris' Methoden konnte ich meine Abschlussquote um 40% steigern!",
    rating: 5
  },
  {
    name: "Sarah Weber",
    role: "Account Executive",
    quote: "Der beste Sales-Kurs, den ich je gemacht habe. Praxisnah und sofort umsetzbar.",
    rating: 5
  },
  {
    name: "Tom Müller",
    role: "Business Development",
    quote: "Chris versteht es, komplexe Verkaufstechniken einfach zu vermitteln.",
    rating: 5
  },
  {
    name: "Lisa Wagner",
    role: "Senior Sales Rep",
    quote: "Ein Game-Changer für meine Sales-Karriere. Kann ich nur empfehlen!",
    rating: 5
  },
];

export default function CircularGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-[400px] sm:h-[450px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-2xl border-2 border-gray-100">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center mb-8 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          onClick={previous}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}

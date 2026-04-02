"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const backgroundPhotos = [
  "/engagement-1.jpg",
  "/engagement-2.jpg",
  "/engagement-3.jpg",
  "/engagement-4.jpg",
  "/engagement-5.jpg",
  "/engagement-6.jpg",
];

export default function Hero() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Preload images
  useEffect(() => {
    backgroundPhotos.forEach((src) => {
      const preloadImg = new window.Image();
      preloadImg.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        (prevIndex + 1) % backgroundPhotos.length
      );
    }, 4000); // Slightly slower for more elegant transitions

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg snap-start snap-always px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-20"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-1/2 left-10 opacity-25 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-8 h-8 border-2 border-wedding-pink-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 border border-wedding-gold-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-48 left-8 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-wedding-pink-400 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-16 opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-10 h-10 border border-wedding-pink-500 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 right-10 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-5 h-5 bg-wedding-gold-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-20 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-7 h-7 border-2 border-wedding-pink-600 rounded-full"></div>
      </div>
      <div className="absolute bottom-48 right-8 opacity-25 animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="w-3 h-3 bg-wedding-pink-500 rounded-full"></div>
      </div>
      {/* Additional light graphics */}
      <div className="absolute top-20 left-1/4 opacity-15 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-12 h-12 border border-wedding-gold-400 rounded-full"></div>
      </div>
      <div className="absolute top-3/4 right-1/3 opacity-20 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="w-8 h-8 bg-wedding-pink-300 rounded-full"></div>
      </div>
      <div className="absolute top-1/4 left-1/2 opacity-10 animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="w-6 h-6 border-2 border-wedding-pink-300 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-1/3 opacity-15 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="w-10 h-10 border border-wedding-gold-300 rounded-full"></div>
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-12 animate-float" style={{ animationDelay: '2.8s' }}>
        <div className="w-5 h-5 bg-wedding-pink-200 rounded-full"></div>
      </div>

      {/* Background slideshow with smooth transitions */}
      {backgroundPhotos.map((photo, index) => (
        <motion.div
          key={photo}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentPhotoIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/20" />

      {/* Top content - names and date */}
      <div className="relative z-10 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-tangerine text-4xl md:text-6xl lg:text-8xl text-white mb-10 leading-tight"
          style={{ textShadow: '0 2px 20px rgba(168, 94, 112, 0.15)' }}
        >
          Prasad ♡ Chinmayi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-cormorant-garamond text-xl md:text-2xl text-white/90 font-bold tracking-wider"
        >
          26 April 2026 • Jalgaon, India
        </motion.p>
      </div>


      {/* Bottom navigation */}
      <div className="relative z-10 px-4 pb-8 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto"
        >
          <button
            onClick={() => scrollToSection('story')}
            className="rounded-full bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-bold font-cormorant-garamond text-wedding-pink-600 hover:bg-white hover:text-wedding-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="rounded-full bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-bold font-cormorant-garamond text-wedding-pink-600 hover:bg-white hover:text-wedding-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Our Moments
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="rounded-full bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-bold font-cormorant-garamond text-wedding-pink-600 hover:bg-white hover:text-wedding-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Celebration
          </button>
          <button
            onClick={() => scrollToSection('rsvp')}
            className="rounded-full bg-white/90 backdrop-blur-sm px-8 py-4 text-lg font-bold font-cormorant-garamond text-wedding-pink-600 hover:bg-white hover:text-wedding-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
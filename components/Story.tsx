"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Story() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-04-26T12:35:00+05:30'); // IST timezone

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="story" className="relative py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 story-bg overflow-hidden snap-start snap-always">
      {/* Floating decorative elements */}
      <div className="absolute top-40 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 border-2 border-wedding-pink-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 border border-wedding-gold-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 right-20 opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-6 bg-wedding-pink-400 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <div className="mb-16">
          <img 
            src="/ganpati-logo.svg" 
            alt="Ganesh Logo" 
            className="w-40 h-40 mb-4 mx-auto opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-gold-600 tracking-wide">
            श्री गणेशाय नमः
          </h2>
        </div>

        {/* Sacred text */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.6 }}
  className="max-w-3xl mx-auto mb-10"
>
  {/* Sanskrit Verse */}
  <p className="font-gotu text-2xl md:text-3xl text-wedding-gold-600 leading-relaxed tracking-wide">
    वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
    <br />
    निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
  </p>
</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <h2 className="font-gotu text-5xl md:text-6xl lg:text-7xl text-wedding-pink-600 mb-6 leading-tight">
            ॐ
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-wedding-pink-800 font-cormorant-garamond text-2xl md:text-3xl leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-light"
            >
              With joy in our hearts, together with our families, we invite you to celebrate.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-light"
            >
              As we embark on a new journey of love, laughter, and togetherness, united in the sacred bond of marriage. Two souls, two families, one beautiful beginning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              className="font-light italic text-wedding-gold-600 text-xl md:text-2xl"
            >
              Your presence, blessings, and love would make our celebration complete. Join us as we begin this eternal journey together.
            </motion.p>
          </div>
        </motion.div>

        {/* Wedding Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 mb-8"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-tangerine text-3xl md:text-4xl text-wedding-pink-600 mb-6 text-center font-bold">
              Preparing to move as one, our sacred union awaits...
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-5xl text-white bg-wedding-pink-500 p-4 rounded-md font-courier shadow-lg"
                >
                  {timeLeft.days}
                </motion.div>
                <div className="font-cormorant-garamond text-sm text-wedding-pink-600 uppercase tracking-wide">
                  Days
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-5xl text-white bg-wedding-pink-500 p-4 rounded-md font-courier shadow-lg"
                >
                  {timeLeft.hours}
                </motion.div>
                <div className="font-cormorant-garamond text-sm text-wedding-pink-600 uppercase tracking-wide">
                  Hours
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-5xl text-white bg-wedding-pink-500 p-4 rounded-md font-courier shadow-lg"
                >
                  {timeLeft.minutes}
                </motion.div>
                <div className="font-cormorant-garamond text-sm text-wedding-pink-600 uppercase tracking-wide">
                  Minutes
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-5xl text-white bg-wedding-pink-500 p-4 rounded-md font-courier shadow-lg"
                >
                  {timeLeft.seconds}
                </motion.div>
                <div className="font-cormorant-garamond text-sm text-wedding-pink-600 uppercase tracking-wide">
                  Seconds
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="font-cormorant-garamond text-xl font-bold text-wedding-pink-800">
                26 April 2026 • Jalgaon, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.3 }}
          className="mt-16 flex justify-center space-x-12 text-3xl text-wedding-pink-400 opacity-50"
        >
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </motion.div>
      </div>
    </section>
  );
}
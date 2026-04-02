"use client";

import { motion } from "framer-motion";

const events = [
  {
    name: "Haldi",
    date: "25 April 2026",
    time: "04:00 PM",
    location: "Utkarsh Sohale, Jalgaon, Maharashtra",
    details: "Traditional haldi ceremony with family and close friends",
    icon: "✨",
  },
  {
    name: "Sangeet",
    date: "25 April 2026",
    time: "7:00 PM",
    location: "Utkarsh Sohale, Jalgaon, Maharashtra",
    details: "Evening of music, dance, and celebration with loved ones",
    icon: "🎵",
  },
  {
    name: "Wedding",
    date: "26 April 2026",
    time: "12:35 PM",
    location: "Utkarsh Sohale, Jalgaon, Maharashtra",
    details: "Saptapadi and rituals of Traditional Hindu wedding",
    icon: "💒",
  },
  // {
  //   name: "Reception",
  //   date: "27 April2026",
  //   time: "7:00 PM",
  //   location: "Bandhan Lawns, Akola, Maharashtra",
  //   details: "Saptapadi and rituals of Traditional Hindu wedding",
  //   icon: "💒",
  // },
];

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 events-bg relative overflow-hidden snap-start snap-always">
      {/* Floating decorative elements */}
      <div className="absolute top-16 left-16 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-10 border border-wedding-gold-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-24 right-12 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-6 h-6 bg-wedding-pink-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="w-8 h-8 border-2 border-wedding-pink-500 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="font-tangerine text-5xl md:text-6xl lg:text-7xl text-wedding-pink-600 mb-6 leading-tight font-bold">
            Celebration
          </h2>
          <p className="font-cormorant-garamond text-lg md:text-xl text-wedding-pink-700 font-bold max-w-2xl mx-auto">
            Join us as we exchange vows and begin our life's new chapter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-wedding-pink-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-5xl md:text-6xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {event.icon}
                </motion.div>

                <h3 className="font-tangerine text-4xl md:text-5xl text-wedding-pink-600 mb-4 leading-tight font-bold italic">
                  {event.name}
                </h3>

                <div className="space-y-3 font-cormorant-garamond text-wedding-pink-700">
                  <p className="font-bold text-xl md:text-2xl text-wedding-gold-600">{event.date}</p>
                  <p className="font-bold text-lg md:text-xl text-wedding-pink-600">{event.time}</p>
                  <p className="text-base md:text-lg text-wedding-pink-700 font-semibold">{event.location}</p>
                </div>

                <p className="mt-6 font-cormorant-garamond text-wedding-pink-600 font-medium text-lg md:text-xl leading-relaxed">
                  {event.details}
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-wedding-pink-300 rounded-tr opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-wedding-pink-300 rounded-bl opacity-50"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHotel, FaLandmark } from "react-icons/fa";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Utkarsh+Sohale+Jalgaon+Maharashtra";

const details = [
  {
    title: "Wedding Venue",
    subtitle: "Utkarsh Sohale",
    description: "Jalgaon, Maharashtra",
    details: "26 April 2026 | 12:35 PM onwards",
    icon: <FaLandmark className="text-wedding-pink-600" />,
    link: null,
  },
  {
    title: "Address",
    subtitle: "Venue Location",
    description:
      "Bharat Petroleum Road, near MIDC Road, M-Sector, Old MIDC",
    details: "Jalgaon, Maharashtra 425003",
    icon: <FaHotel className="text-wedding-pink-600" />,
    link: null,
  },
  {
    title: "Directions",
    subtitle: "Open Map",
    description: "Click below to navigate",
    details: "Scan QR for location",
    icon: <FaMapMarkerAlt className="text-wedding-pink-600" />,
    link: mapLink,
  },
];

export default function Details() {
  return (
    <section
      id="details"
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 details-bg relative overflow-hidden snap-start snap-always"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* ✅ HEADER (MATCHED WITH EVENTS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="font-tangerine text-5xl md:text-6xl lg:text-7xl text-wedding-pink-600 mb-6 leading-tight font-bold">
            Venue & Travel
          </h2>
          <p className="font-cormorant-garamond text-lg md:text-xl text-wedding-pink-700 font-bold max-w-2xl mx-auto">
            We request the honor of your presence.
          </p>
        </motion.div>

        {/* ✅ CARDS (MATCHED STYLE) */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-wedding-pink-100/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
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
                  {detail.icon}
                </motion.div>

                <h3 className="font-tangerine text-4xl md:text-5xl text-wedding-pink-600 mb-4 leading-tight font-bold italic">
                  {detail.title}
                </h3>

                <div className="space-y-3 font-cormorant-garamond text-wedding-pink-700">
                  <p className="font-bold text-xl md:text-2xl text-wedding-gold-600">
                    {detail.subtitle}
                  </p>
                  <p className="font-bold text-lg md:text-xl text-wedding-pink-600">
                    {detail.description}
                  </p>
                  <p className="text-base md:text-lg font-semibold">
                    {detail.details}
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              {detail.link && (
                <a
                  href={detail.link}
                  target="_blank"
                  className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-wedding-pink-500 to-wedding-pink-600 text-white rounded-full font-cormorant-garamond font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View on Map
                </a>
              )}

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-wedding-pink-300 rounded-tr opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-wedding-pink-300 rounded-bl opacity-50"></div>
            </motion.div>
          ))}
        </div>

        {/* ✅ QR BELOW (SEPARATE, BALANCED) */}
        <div className="mt-16 w-24 h-[1px] bg-wedding-pink-300/40 mx-auto"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="font-cormorant-garamond text-lg text-wedding-pink-600 mb-4">
            Scan for directions
          </p>

          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${mapLink}`}
            alt="QR Code"
            className="rounded-xl shadow-lg ring-2 ring-wedding-pink-200/50"
          />
        </motion.div>

      </div>
    </section>
  );
}
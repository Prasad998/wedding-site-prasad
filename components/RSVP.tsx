"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xaqldqvn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 rsvp-bg relative overflow-hidden snap-start snap-always">
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="font-tangerine text-6xl md:text-7xl text-wedding-pink-600 mb-6 font-bold">
            Join Us
          </h2>
          <p className="font-cormorant-garamond text-xl md:text-2xl text-wedding-pink-700">
            We would be honored to have you celebrate this special day with us
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="p-12 bg-white/90 rounded-3xl shadow-2xl">
              <div className="text-7xl mb-6">💌</div>
              <h3 className="text-4xl text-wedding-pink-600 mb-4 italic">
                Thank You!
              </h3>
              <p className="text-lg text-wedding-pink-700">
                We have received your RSVP.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-lg font-semibold text-wedding-pink-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 text-lg rounded-2xl border"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-lg font-semibold text-wedding-pink-600">
                    Email/ Contact Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="w-full px-4 py-3 text-lg rounded-2xl border"
                  />
                </div>
              </div>

              {/* Guests + Attendance */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-lg font-semibold text-wedding-pink-600">
                    Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    defaultValue={1}
                    className="w-full px-4 py-3 text-lg rounded-2xl border"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-lg font-semibold text-wedding-pink-600">
                    Attendance
                  </label>
                  <select
                    name="attendance"
                    className="w-full px-4 py-3 text-lg rounded-2xl border"
                  >
                    <option value="yes">Yes</option>
                    <option value="maybe">Maybe</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="text-left">
                <label className="block text-lg font-semibold text-wedding-pink-600">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 text-lg rounded-2xl border"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-5 bg-pink-600 text-white rounded-2xl text-xl"
              >
                Send RSVP
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
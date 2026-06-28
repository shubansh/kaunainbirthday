"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { CONFIG } from "@/config/birthday";

export default function Reasons() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4">
            {CONFIG.age} Reasons We Love You
          </h2>
          <p className="font-inter text-brand-subtext text-lg">And a million more...</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CONFIG.reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 flex flex-col items-center text-center group cursor-default hover:bg-white/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(255,182,193,0.3)] relative overflow-hidden"
            >
              {/* Animated Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-rose-gold/0 via-brand-rose-gold/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-brand-rose-gold group-hover:fill-brand-rose-gold transition-colors" />
              </div>
              <span className="font-poppins text-brand-text font-medium text-sm leading-relaxed relative z-10">
                {reason}
              </span>
              
              {/* Subtle Number */}
              <div className="absolute -bottom-4 -right-2 text-6xl font-playfair font-bold text-black/5 opacity-50 group-hover:text-brand-rose-gold/10 transition-colors pointer-events-none">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

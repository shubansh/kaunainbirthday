"use client";

import { motion } from "framer-motion";
import { CONFIG } from "@/config/birthday";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="glass-card p-10 md:p-16 relative"
        >
          {/* Decorative Corner Flowers */}
          <div className="absolute -top-6 -left-6 text-4xl opacity-80 rotate-[-15deg]">🌸</div>
          <div className="absolute -bottom-6 -right-6 text-4xl opacity-80 rotate-[15deg]">✨</div>

          <h3 className="font-great-vibes text-4xl md:text-5xl text-brand-rose-gold mb-8">
            {CONFIG.about.title}
          </h3>
          
          <div className="space-y-6 font-inter text-brand-subtext text-lg leading-relaxed">
            {CONFIG.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="font-playfair text-xl text-brand-text italic pt-4">
            &quot;{CONFIG.about.quote}&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

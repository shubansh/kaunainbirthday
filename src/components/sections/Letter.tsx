"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { CONFIG } from "@/config/birthday";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4">
            A Letter For You
          </h2>
          <p className="font-inter text-brand-subtext text-lg">A message from our hearts to yours.</p>
        </motion.div>

        {!isOpen ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative group w-64 h-48 bg-[#fdfbf7] rounded-lg shadow-xl border border-gray-200 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(183,110,121,0.2)]"
          >
            {/* Envelope Flap styling */}
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-t-[96px] border-transparent border-t-[#f5efdf] border-l-transparent border-r-transparent transition-transform duration-500 origin-top group-hover:rotate-x-180" />
            
            <Mail className="w-16 h-16 text-brand-rose-gold/60 mt-4" />
            <span className="font-playfair text-brand-text mt-4 tracking-widest uppercase text-sm border-b border-brand-rose-gold/30 pb-1">Open Letter</span>
            
            {/* Wax Seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#b82a39] rounded-full shadow-md flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#f5efdf] fill-current" />
            </div>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="w-full max-w-3xl bg-[#fdfbf7] p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-sm relative overflow-hidden"
          >
            {/* Paper Texture/Lines Approximation */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #000 32px)" }} />
            
            <div className="relative z-10 font-playfair text-brand-text text-lg md:text-xl leading-[2.2] space-y-8">
              <p className="font-great-vibes text-4xl text-brand-rose-gold mb-8">{CONFIG.letter.greeting}</p>
              
              {CONFIG.letter.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              
              <div className="pt-12 text-right">
                <p className="whitespace-pre-wrap font-great-vibes text-4xl text-brand-rose-gold">{CONFIG.letter.signoff}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

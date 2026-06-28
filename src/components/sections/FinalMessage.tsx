"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import GlassImage from "@/components/ui/GlassImage";
import { CONFIG } from "@/config/birthday";

export default function FinalMessage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 py-20">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-bg opacity-80" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
          className="relative mb-16"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-brand-rose-gold to-white shadow-[0_20px_50px_rgba(183,110,121,0.3)]">
            <GlassImage 
              src={CONFIG.final.image}
              alt="Final Portrait"
              width={256}
              height={256}
              containerClassName="w-full h-full rounded-full overflow-hidden"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 text-5xl"
          >
            👑
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h2 className="font-great-vibes text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-brand-rose-gold via-[#e8a3b1] to-[#b87685] mb-4 pb-2">
            {CONFIG.final.title}
          </h2>
          <h3 className="font-playfair text-3xl md:text-5xl text-brand-text mb-8">
            {CONFIG.final.subtitle}
          </h3>
          
          <div className="w-24 h-1 bg-brand-rose-gold/30 mx-auto rounded-full mb-8" />
          
          <p className="font-inter text-brand-subtext text-xl md:text-2xl leading-relaxed max-w-2xl whitespace-pre-wrap italic">
            &quot;{CONFIG.final.message}&quot;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-20 flex items-center gap-4 text-brand-rose-gold/80"
        >
          <Heart className="w-5 h-5 fill-current" />
          <Heart className="w-6 h-6 fill-current animate-pulse" />
          <Heart className="w-5 h-5 fill-current" />
        </motion.div>

      </div>
    </section>
  );
}

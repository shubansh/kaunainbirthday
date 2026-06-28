"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Moon } from "lucide-react";

const stars = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 90 + 5}%`,
  size: Math.random() * 20 + 15,
  delay: Math.random() * 2,
  wish: `A special wish ${i + 1} for you: May your path always be illuminated with joy.`,
}));

export default function StarWishes() {
  const [activeWish, setActiveWish] = useState<string | null>(null);

  return (
    <section className="py-40 relative z-10 bg-[#0f172a] overflow-hidden">
      {/* Night Sky Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0f172a] to-black -z-10" />
      
      {/* Milky way effect */}
      <div className="absolute top-0 right-1/4 w-[120%] h-40 bg-white/5 blur-[80px] -rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20 relative"
        >
          {/* Moon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-20"
          >
            <Moon className="w-32 h-32 text-yellow-100 fill-yellow-100/20" />
          </motion.div>
          
          <h2 className="font-great-vibes text-5xl md:text-7xl text-blue-100 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Star Wishes
          </h2>
          <p className="font-inter text-blue-200/60 text-lg tracking-wide uppercase text-sm">Click the stars to reveal the wishes</p>
        </motion.div>

        <div className="relative w-full h-[60vh] min-h-[500px]">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute cursor-pointer"
              style={{ top: star.top, left: star.left }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: star.delay }}
              whileHover={{ scale: 1.5, filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
              onClick={() => setActiveWish(star.wish)}
            >
              <Star 
                className="text-yellow-100 fill-yellow-100" 
                style={{ width: star.size, height: star.size }} 
              />
              <motion.div
                className="absolute inset-0 bg-white rounded-full blur-[4px] -z-10"
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: (star.id % 2) + 1, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wish Display Modal */}
      <AnimatePresence>
        {activeWish && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            onClick={() => setActiveWish(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg p-12 rounded-2xl bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] text-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Star Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-500/20 blur-[50px] -z-10" />
              
              <Star className="w-12 h-12 text-yellow-200 fill-yellow-200 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]" />
              <p className="font-playfair text-xl md:text-2xl text-blue-50 leading-relaxed italic">
                &quot;{activeWish}&quot;
              </p>
              <button 
                onClick={() => setActiveWish(null)}
                className="mt-10 px-8 py-3 rounded-full border border-blue-400/30 text-blue-200 hover:bg-blue-900/50 hover:border-blue-400 transition-all text-sm uppercase tracking-widest"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

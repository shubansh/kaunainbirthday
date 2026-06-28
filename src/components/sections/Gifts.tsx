"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X } from "lucide-react";

const gifts = [
  { id: 1, color: "from-[#ff9a9e] to-[#fecfef]", content: "A special trip to your favorite place!" },
  { id: 2, color: "from-[#a18cd1] to-[#fbc2eb]", content: "A new guitar to play your favorite songs." },
  { id: 3, color: "from-[#84fab0] to-[#8fd3f4]", content: "Unlimited love and support, forever." },
];

export default function Gifts() {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const [activeGift, setActiveGift] = useState<{id: number, content: string} | null>(null);

  const handleOpenGift = (id: number, content: string) => {
    if (!openedGifts.includes(id)) {
      setOpenedGifts([...openedGifts, id]);
    }
    setActiveGift({ id, content });
  };

  return (
    <section id="gifts" className="py-24 relative z-10 bg-white/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4">
            Surprise Gifts
          </h2>
          <p className="font-inter text-brand-subtext text-lg">Tap to open your virtual presents.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {gifts.map((gift, index) => {
            const isOpened = openedGifts.includes(gift.id);
            return (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative cursor-pointer group"
                onClick={() => handleOpenGift(gift.id, gift.content)}
              >
                {!isOpened ? (
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: [-2, 2, -2, 0] }}
                    className={`w-40 h-40 md:w-56 md:h-56 rounded-xl bg-gradient-to-br ${gift.color} shadow-2xl relative flex items-center justify-center`}
                  >
                    {/* Ribbon Vertical */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-white/60 backdrop-blur-sm shadow-sm" />
                    {/* Ribbon Horizontal */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-white/60 backdrop-blur-sm shadow-sm" />
                    {/* Bow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Gift className="w-16 h-16 text-brand-rose-gold drop-shadow-md z-10 relative bg-white rounded-full p-3" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-40 h-40 md:w-56 md:h-56 rounded-xl glass-card flex flex-col items-center justify-center p-4 text-center border-2 border-brand-rose-gold/30"
                  >
                    <span className="font-playfair text-xl text-brand-rose-gold mb-2">Opened!</span>
                    <span className="text-sm font-inter text-brand-subtext">Click to view again</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gift Content Modal */}
      <AnimatePresence>
        {activeGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg p-6"
            onClick={() => setActiveGift(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 100, rotate: 5 }}
              transition={{ type: "spring", damping: 20 }}
              className="glass-card bg-white w-full max-w-lg p-10 md:p-16 text-center relative shadow-[0_0_100px_rgba(255,255,255,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                onClick={() => setActiveGift(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-brand-rose-gold to-brand-pink rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Gift className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-playfair text-3xl text-brand-text mb-6">Surprise!</h3>
              <p className="font-inter text-lg text-brand-subtext leading-relaxed">
                {activeGift.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

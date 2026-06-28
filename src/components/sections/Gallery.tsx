"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";
import Image from "next/image";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<{src: string, caption: string} | null>(null);

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-rose-gold mb-4">
            Memories We Cherish
          </h2>
          <p className="font-inter text-brand-subtext text-lg">Every picture tells a beautiful story.</p>
        </motion.div>

        {/* Masonry Layout Approximation using Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {CONFIG.gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-[0_10px_40px_rgba(255,182,193,0.4)] transition-shadow duration-500 break-inside-avoid ${img.height}`}
              onClick={() => setSelectedImg({ src: img.src, caption: img.caption })}
            >
              <GlassImage 
                src={img.src} 
                alt={img.caption} 
                fill
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-brand-pink/20 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass Caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                <ZoomIn className="w-12 h-12 text-white mb-4 drop-shadow-lg" />
                <div className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-playfair text-lg tracking-wide shadow-xl">
                  {img.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 md:top-12 md:right-12 text-white/70 hover:text-white transition-colors bg-white/10 p-4 rounded-full hover:bg-white/20 hover:scale-110">
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-[80vh] flex items-center justify-center"
              >
                 <Image
                  src={selectedImg.src}
                  alt={selectedImg.caption}
                  fill
                  className="object-contain rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-white font-playfair text-2xl tracking-wider"
              >
                {selectedImg.caption}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

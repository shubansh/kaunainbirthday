"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";
import Image from "next/image";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % CONFIG.gallery.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length);
    }
  }, [selectedIndex]);

  const handleClose = () => setSelectedIndex(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Swipe logic
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) handlePrev();
    if (info.offset.x < -50) handleNext();
  };

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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {CONFIG.gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
              className={`relative rounded-[20px] overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.8)] border-[4px] border-white transition-all duration-700 break-inside-avoid ${img.height}`}
              onClick={() => setSelectedIndex(idx)}
            >
              <GlassImage 
                src={img.src} 
                alt={img.caption} 
                fill
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Glass Caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-75">
                <ZoomIn className="w-10 h-10 text-brand-text mb-3 drop-shadow-md" />
                <div className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-brand-text font-playfair text-base tracking-wide shadow-lg">
                  {img.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
            onClick={handleClose}
          >
            <button className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 z-50">
              <X className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 p-4 rounded-full hover:bg-white/20 hover:scale-110 z-50 hidden md:block"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 p-4 rounded-full hover:bg-white/20 hover:scale-110 z-50 hidden md:block"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute top-6 left-6 md:top-8 md:left-8 text-white/70 font-inter tracking-widest text-sm z-50 bg-white/10 px-4 py-2 rounded-full shadow-sm">
              {selectedIndex + 1} / {CONFIG.gallery.length}
            </div>

            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={handleDragEnd}
                className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                 <Image
                  src={CONFIG.gallery[selectedIndex].src}
                  alt={CONFIG.gallery[selectedIndex].caption}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg drop-shadow-2xl select-none pointer-events-none"
                />
              </motion.div>
              <motion.div 
                key={`caption-${selectedIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-white font-playfair text-xl md:text-2xl tracking-wider select-none"
              >
                {CONFIG.gallery[selectedIndex].caption}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

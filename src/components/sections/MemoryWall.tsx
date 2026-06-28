"use client";

import { motion } from "framer-motion";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";

export default function MemoryWall() {
  return (
    <section id="memories" className="py-24 relative z-10 bg-brand-pink/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-text mb-4">
            Scrapbook of Love
          </h2>
          <p className="font-inter text-brand-subtext text-lg">Little moments that mean the world.</p>
        </motion.div>

        <div className="relative w-full min-h-[800px] flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {CONFIG.memories.map((mem, i) => (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, scale: 0.8, rotate: mem.rotation * 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: mem.rotation }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 40,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              className={`relative z-10 transition-shadow duration-300 ${
                mem.type === 'polaroid' 
                  ? 'bg-white p-4 pb-16 rounded shadow-xl border border-gray-100' 
                  : 'bg-[#FFF9C4] p-6 pb-12 rounded shadow-lg'
              }`}
              style={{ width: mem.type === 'polaroid' ? '280px' : '240px' }}
            >
              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2" style={{ clipPath: 'polygon(5% 0, 100% 5%, 95% 100%, 0 95%)' }} />

              <GlassImage 
                src={mem.src}
                alt="Memory"
                width={300}
                height={300}
                containerClassName={`w-full aspect-square ${mem.type === 'polaroid' ? 'bg-gray-100 rounded-sm' : 'rounded shadow-inner'}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                <span className="font-script text-3xl text-gray-800 leading-tight block transform -rotate-2">
                  {mem.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

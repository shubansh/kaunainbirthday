"use client";

import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";
import { CONFIG } from "@/config/birthday";
import GlassImage from "@/components/ui/GlassImage";

export default function Family() {
  return (
    <section id="family" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-great-vibes text-5xl md:text-7xl text-brand-text mb-4">
            With Love From Your Family ❤️
          </h2>
          <p className="font-inter text-brand-subtext text-lg">The ones who will always stand by you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {CONFIG.family.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Premium Greeting Card */}
              <div className="glass-card flex flex-col p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(183,110,121,0.2)] hover:-translate-y-2 relative overflow-hidden group h-full">
                
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden mb-6 bg-brand-pink/10 flex items-center justify-center backdrop-blur-sm shadow-inner group-hover:shadow-md transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 z-10"></div>
                  <GlassImage 
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    containerClassName="absolute inset-0 w-full h-full border-none bg-transparent"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out z-20"
                  />
                </div>

                {/* Content */}
                <div className="text-center relative z-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-brand-text mb-1">{member.name}</h3>
                    <span className="text-xs font-inter uppercase tracking-widest text-brand-rose-gold block mb-6">{member.relation}</span>
                    
                    <Quote className="w-8 h-8 text-brand-pink mx-auto mb-4 opacity-50" />
                    <p className="font-inter text-brand-subtext leading-relaxed text-sm md:text-base italic mb-6">
                      &quot;{member.message}&quot;
                    </p>
                  </div>
                  
                  {/* Floating Heart Animation on Hover */}
                  <div className="flex justify-center h-8 mt-auto">
                    <Heart className="w-6 h-6 text-brand-rose-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 fill-brand-rose-gold drop-shadow-sm" />
                  </div>
                </div>

                {/* Decorative Borders */}
                <div className="absolute inset-2 rounded-xl border border-brand-rose-gold/10 pointer-events-none group-hover:border-brand-rose-gold/30 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] transition-all duration-500 z-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

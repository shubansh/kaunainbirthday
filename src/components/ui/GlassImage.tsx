"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  containerClassName?: string;
}

export default function GlassImage({ src, alt, containerClassName, className, ...props }: GlassImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center", containerClassName)}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-700 ease-in-out",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-rose-gold/60 p-4 text-center">
          <Sparkles className="w-8 h-8 mb-2 opacity-50" />
          <span className="font-playfair text-sm tracking-widest italic opacity-70 uppercase">Image Magic Loading...</span>
        </div>
      )}
      
      {/* Loading Shimmer */}
      {!isLoaded && !hasError && (
        <motion.div 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ translateX: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

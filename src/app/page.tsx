"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Background from "@/components/effects/Background";
import Hero from "@/components/sections/Hero";

import Countdown from "@/components/sections/Countdown";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import MemoryWall from "@/components/sections/MemoryWall";
import Reasons from "@/components/sections/Reasons";
import Family from "@/components/sections/Family";
import Cake from "@/components/sections/Cake";
import Gifts from "@/components/sections/Gifts";
import StarWishes from "@/components/sections/StarWishes";
import Letter from "@/components/sections/Letter";
import FinalMessage from "@/components/sections/FinalMessage";
import MusicPlayer from "@/components/sections/MusicPlayer";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
        <Background />
        
        {!loading && (
          <>
            <Navbar />
            <MusicPlayer />
            <Hero />
            <Countdown />
            <About />
            <Timeline />
            <Gallery />
            <MemoryWall />
            <Reasons />
            <Family />
            <Cake />
            <Gifts />
            <StarWishes />
            <Letter />
            <FinalMessage />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

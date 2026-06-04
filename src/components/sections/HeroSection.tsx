"use client";

import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/imports/jovana-video.MP4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">

          <h1 className="font-sans text-5xl md:text-7xl text-white mb-4 tracking-tight drop-shadow-lg">
            dr Jovana Marković
          </h1>
          <p className="text-xl md:text-2xl text-white/90 tracking-widest uppercase drop-shadow-md">
            Skin & Smile
          </p>
        </div>

        <p className="text-2xl md:text-3xl text-white mb-12 font-light drop-shadow-md">
          Stomatologija, estetska i anti-age medicina
        </p>

        <button
          onClick={onCTAClick}
          className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
        >
          Pogledaj tretmane
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white drop-shadow-lg" size={32} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- HEADER --- */}
      <header className="p-4 md:p-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/90">
        <div className="flex justify-between items-center">
          
          {/* Mobil Menü Gomb (Csak mobilon látszik) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xs uppercase tracking-widest text-gray-400 hover:text-white"
          >
            {isMenuOpen ? 'Bezár' : 'Menü'}
          </button>

          {/* Logó */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-white flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
              <span className="text-white group-hover:text-black font-serif text-lg font-bold relative z-10 transition-colors duration-300">A&H</span>
            </div>
            {/* Mobilon elrejtjük a hosszú szöveget, hogy kiférjen minden */}
            <h1 className="hidden sm:block text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">
              At&Harmonies
            </h1>
          </div>
          
          {/* Asztali Menüpontok (Mobilon rejtve) */}
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Nyakláncok</a>
            <a href="#" className="hover:text-white transition-colors">Karkötők</a>
            <a href="#" className="hover:text-white transition-colors">Gyűrűk</a>
            <a href="#" className="hover:text-white transition-colors">Talizmánok</a>
          </nav>
          
          <button className="border border-white hover:bg-white hover:text-black px-4 py-2 text-xs uppercase tracking-widest transition-all">
            Kosár (0)
          </button>
        </div>

        {/* Lenyíló Mobil Menü */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-6 mt-6 pb-4 text-sm uppercase tracking-widest text-gray-400 border-t border-white/10 pt-6">
            <a href="#" className="hover:text-white transition-colors">Nyakláncok</a>
            <a href="#" className="hover:text-white transition-colors">Karkötők</a>
            <a href="#" className="hover:text-white transition-colors">Gyűrűk</a>
            <a href="#" className="hover:text-white transition-colors">Talizmánok</a>
            <a href="/admin" className="text-gray-700 hover:text-white mt-4 transition-colors">Admin Login</a>
          </nav>
        )}
      </header>

      {/* --- HERO SZEKCIÓ --- */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] -z-10"></div>
        <h2 className="text-4xl md:text-7xl font-serif mb-6 leading-tight tracking-wide">
          NYERS <span className="italic font-light text-gray-400">és</span> IGAZI
        </h2>
        <p className="max-w-xl text-gray-400 text-sm md:text-base mb-12 font-light tracking-wide leading-relaxed">
          Takács Attila kézműves ékszerei. Ahol a sötétség formát ad a fénynek, és a fém találkozik a lélekkel.
        </p>
      </section>

      {/* --- TIKTOK STÍLUSÚ VIDEÓS SZEKCIÓ (SWIPE) --- */}
      <section className="py-10">
        <div className="px-6 mb-8 flex justify-between items-end">
          <h3 className="text-lg uppercase tracking-widest border-l-2 border-white pl-4">Kiemelt Darabok</h3>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Húzd oldalra ➔</span>
        </div>

        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          
          {/* 1. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[60vh] md:h-[550px] bg-zinc-900 relative snap-center overflow-hidden border border-white/10 group">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h4 className="text-xl md:text-2xl font-serif mb-2">Föld Anya Nyakék</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-6 font-light">Kézzel kalapált réz textúra.</p>
              <button className="w-full bg-white text-black hover:bg-gray-200 py-3 md:py-4 text-xs uppercase tracking-widest font-bold transition-all">
                Részletek
              </button>
            </div>
          </div>

          {/* 2. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[60vh] md:h-[550px] bg-zinc-900 relative snap-center overflow-hidden border border-white/10 group">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h4 className="text-xl md:text-2xl font-serif mb-2">Éjfél Gyűrű</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-6 font-light">Sötétített ezüst, letisztult forma.</p>
              <button className="w-full bg-transparent border border-white hover:bg-white hover:text-black text-white py-3 md:py-4 text-xs uppercase tracking-widest font-bold transition-all">
                Részletek
              </button>
            </div>
          </div>

          {/* 3. Kártya */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[60vh] md:h-[550px] bg-zinc-900 relative snap-center overflow-hidden border border-white/10 group flex items-center justify-center">
             <span className="text-gray-500 uppercase tracking-widest text-xs">Hamarosan...</span>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-10 border-t border-white/10 py-10 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>&copy; 2026 At&Harmonies - Takács Attila.</p>
      </footer>
    </main>
  );
}
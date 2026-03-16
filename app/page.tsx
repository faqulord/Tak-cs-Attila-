"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- HEADER --- */}
      <header className="p-4 md:p-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-black/80 flex justify-between items-center">
        
        {/* Mobil Menü Ikon (Hamburger) */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white p-2 -ml-2"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Új, Prémium Tipográfiai Logó */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-white">
            A<span className="text-gray-500 italic font-light mx-1">&</span>H
          </span>
          <span className="hidden md:block text-[0.6rem] uppercase tracking-[0.3em] text-gray-500 mt-1">
            At & Harmonies
          </span>
        </div>
        
        {/* Asztali Menüpontok */}
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Nyakláncok</a>
          <a href="#" className="hover:text-white transition-colors">Karkötők</a>
          <a href="#" className="hover:text-white transition-colors">Gyűrűk</a>
          <a href="#" className="hover:text-white transition-colors">Talizmánok</a>
        </nav>
        
        {/* Kosár Ikon & Szöveg */}
        <button className="flex items-center gap-2 hover:text-gray-300 transition-colors text-xs uppercase tracking-widest">
          <span className="hidden sm:inline">Kosár</span>
          <span>(0)</span>
        </button>
      </header>

      {/* --- TELJES KÉPERNYŐS MOBIL MENÜ (OVERLAY) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col">
          <div className="p-4 flex justify-between items-center border-b border-white/10">
            <span className="font-serif text-xl tracking-[0.2em] text-white">A<span className="text-gray-500 italic">&</span>H</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-lg uppercase tracking-[0.2em] text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Nyakláncok</a>
            <a href="#" className="hover:text-white transition-colors">Karkötők</a>
            <a href="#" className="hover:text-white transition-colors">Gyűrűk</a>
            <a href="#" className="hover:text-white transition-colors">Talizmánok</a>
            <div className="w-12 h-[1px] bg-white/20 my-4"></div>
            <a href="/admin" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Admin Login</a>
          </nav>
        </div>
      )}

      {/* --- HERO SZEKCIÓ --- */}
      <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] -z-10"></div>
        <h2 className="text-4xl md:text-7xl font-serif mb-6 leading-tight tracking-wide">
          NYERS <span className="italic font-light text-gray-500">és</span> IGAZI
        </h2>
        <p className="max-w-xl text-gray-400 text-sm md:text-base mb-12 font-light tracking-wide leading-relaxed">
          Takács Attila kézműves ékszerei. Ahol a sötétség formát ad a fénynek, és a fém találkozik a lélekkel.
        </p>
      </section>

      {/* --- TIKTOK STÍLUSÚ VIDEÓS SZEKCIÓ (SWIPE) --- */}
      <section className="py-10">
        <div className="px-6 mb-8 flex justify-between items-end">
          <h3 className="text-lg uppercase tracking-widest border-l-2 border-white pl-4">Kiemelt Darabok</h3>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Húzd oldalra ➔</span>
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

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-10 border-t border-white/10 py-10 text-center text-gray-600 text-[10px] uppercase tracking-widest">
        <p>&copy; 2026 At&Harmonies - Takács Attila.</p>
      </footer>
    </main>
  );
}
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#130725] text-purple-100 font-sans selection:bg-purple-500 selection:text-black">
      
      {/* --- HEADER --- */}
      <header className="p-4 md:p-6 border-b border-purple-900/50 backdrop-blur-md sticky top-0 z-50 bg-[#130725]/80 flex justify-between items-center shadow-[0_4px_30px_rgba(88,28,135,0.1)]">
        
        {/* Mobil Menü Ikon (Hamburger) */}
        <button onClick={() => setIsMenuOpen(true)} className="xl:hidden text-purple-300 p-2 -ml-2">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Prémium Logó */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            A<span className="text-purple-500 italic font-light mx-1">&</span>H
          </span>
          <span className="hidden md:block text-[0.6rem] uppercase tracking-[0.3em] text-purple-400 mt-1">
            At & Harmonies
          </span>
        </div>
        
        {/* Asztali Menüpontok */}
        <nav className="hidden xl:flex gap-6 text-[11px] uppercase tracking-widest text-purple-300 font-semibold">
          <Link href="/termekek" className="hover:text-white transition-colors">Termékek</Link>
          <Link href="/orgon-generatorok" className="hover:text-white transition-colors">Orgon Generátorok</Link>
          <Link href="/orgon-info" className="hover:text-white transition-colors">Orgon Információ</Link>
          <Link href="/ki-vagyok" className="hover:text-white transition-colors">Ki vagyok</Link>
          <Link href="/kapcsolat" className="hover:text-white transition-colors">Kapcsolat</Link>
          <Link href="/aszf" className="hover:text-white transition-colors">ÁSZF</Link>
        </nav>
        
        {/* Kosár */}
        <button className="flex items-center gap-2 hover:text-white text-purple-300 transition-colors text-xs uppercase tracking-widest font-bold bg-black px-4 py-2 border border-purple-900/50 rounded-md">
          <span className="hidden sm:inline">Kosár</span>
          <span>(0)</span>
        </button>
      </header>

      {/* --- TELJES KÉPERNYŐS MOBIL MENÜ --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col">
          <div className="p-4 flex justify-between items-center border-b border-purple-900/30">
            <span className="font-serif text-xl tracking-[0.2em] text-white">A<span className="text-purple-500 italic">&</span>H</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-purple-300 p-2">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-lg uppercase tracking-[0.2em] text-purple-200">
            <Link href="/termekek" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Termékek</Link>
            <Link href="/orgon-generatorok" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors text-center">Orgon Generátorok</Link>
            <Link href="/orgon-info" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors text-center text-sm">Orgon Információ</Link>
            <Link href="/ki-vagyok" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Ki vagyok</Link>
            <Link href="/kapcsolat" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Kapcsolat</Link>
            <Link href="/aszf" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">ÁSZF</Link>
            <div className="w-12 h-[1px] bg-purple-500/30 my-4"></div>
            <Link href="/admin" className="text-xs text-purple-800 hover:text-purple-500 transition-colors">Vezérlőpult</Link>
          </nav>
        </div>
      )}

      {/* --- HERO SZEKCIÓ --- */}
      <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Misztikus lila fényeffekt a háttérben */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-fuchsia-900/20 blur-[120px] rounded-full -z-10"></div>
        
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight tracking-wider text-white">
          KOZMIKUS <span className="italic font-light text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">energia</span> <br className="md:hidden" /> FÖLDI FORMÁBAN
        </h2>
        <p className="max-w-xl text-purple-200 text-sm md:text-base mb-12 font-light tracking-wide leading-relaxed">
          Takács Attila kézműves orgon generátorai és ékszerei. 
          Tisztítsd meg a teredet, és hangold a lelked a legmagasabb rezgésszintre.
        </p>
      </section>

      {/* --- TIKTOK STÍLUSÚ VIDEÓS SZEKCIÓ --- */}
      <section className="py-10">
        <div className="px-6 mb-8 flex justify-between items-end">
          <h3 className="text-lg uppercase tracking-widest border-l-2 border-purple-500 pl-4 text-white">Legújabb Készítmények</h3>
          <span className="text-[10px] text-purple-400 uppercase tracking-widest">Húzd oldalra ➔</span>
        </div>

        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          
          {/* 1. Kártya (Fekete doboz lila fénnyel) */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[60vh] md:h-[550px] bg-black relative snap-center overflow-hidden border border-purple-900/50 shadow-[0_0_20px_rgba(88,28,135,0.2)] group rounded-lg">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 mix-blend-luminosity">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <span className="bg-purple-900 text-purple-100 text-[9px] px-2 py-1 uppercase tracking-widest mb-3 inline-block rounded-sm">Orgon Generátor</span>
              <h4 className="text-xl md:text-2xl font-serif mb-2 text-white">Térharmonizáló Piramis</h4>
              <p className="text-xs md:text-sm text-purple-300 mb-6 font-light line-clamp-2">Hegyikristály, rézforgács és ametiszt tökéletes szinergiája.</p>
              <button className="w-full bg-purple-950/50 border border-purple-500 text-purple-100 hover:bg-purple-600 hover:text-white py-3 text-xs uppercase tracking-widest font-bold transition-all rounded-sm">
                Részletek
              </button>
            </div>
          </div>

          {/* 2. Kártya */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[60vh] md:h-[550px] bg-black relative snap-center overflow-hidden border border-purple-900/50 shadow-[0_0_20px_rgba(88,28,135,0.2)] group rounded-lg">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 mix-blend-luminosity">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <span className="bg-purple-900 text-purple-100 text-[9px] px-2 py-1 uppercase tracking-widest mb-3 inline-block rounded-sm">Ékszer</span>
              <h4 className="text-xl md:text-2xl font-serif mb-2 text-white">Lélekvédő Medál</h4>
              <p className="text-xs md:text-sm text-purple-300 mb-6 font-light line-clamp-2">Fekete turmalinnal öntött személyes védelmező.</p>
              <button className="w-full bg-purple-950/50 border border-purple-500 text-purple-100 hover:bg-purple-600 hover:text-white py-3 text-xs uppercase tracking-widest font-bold transition-all rounded-sm">
                Részletek
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-10 border-t border-purple-900/50 bg-black/40 py-12 text-center text-purple-500 text-[10px] uppercase tracking-widest">
        <p>&copy; 2026 At&Harmonies - Takács Attila. <br className="md:hidden" />Minden rezgés számít.</p>
      </footer>
    </main>
  );
}
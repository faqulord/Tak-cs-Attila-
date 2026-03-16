"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function KapcsolatPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Később ide kötjük be az email küldő motort!
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      <div className="p-6 border-b border-purple-900/30 bg-purple-950/30 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <Link href="/" className="text-purple-300 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza
        </Link>
        <span className="font-serif tracking-[0.2em] text-white">A<span className="text-purple-400 italic">&</span>H</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-12">
        
        {/* Szöveges rész */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wider mb-6">
            Lépj <span className="text-purple-400 italic">Kapcsolatba</span> velem
          </h1>
          <div className="w-16 h-1 bg-purple-600 mb-8"></div>
          
          <p className="text-gray-300 font-light leading-relaxed mb-8">
            Legyen szó egyedi rendelésről, egy meglévő termékkel kapcsolatos kérdésről, vagy ha csak tanácsra van szükséged az orgon energiával kapcsolatban – keress bizalommal!
          </p>

          <div className="space-y-4 text-sm font-light text-purple-200">
            <p><strong className="text-white uppercase tracking-widest text-xs">Email:</strong><br/>info@atharmonies.hu</p>
            <p><strong className="text-white uppercase tracking-widest text-xs">Műhely:</strong><br/>Magyarország (Előzetes egyeztetés alapján)</p>
            <p><strong className="text-white uppercase tracking-widest text-xs">Válaszidő:</strong><br/>Általában 1-2 munkanapon belül válaszolok.</p>
          </div>
        </div>

        {/* Űrlap */}
        <div className="bg-zinc-950 p-8 border border-purple-900/30 rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px]"></div>
          
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="text-4xl">✨</span>
              <h3 className="text-xl font-serif text-white">Üzenet elküldve!</h3>
              <p className="text-sm text-gray-400">Hamarosan felveszem veled a kapcsolatot.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Neved</label>
                <input required type="text" className="w-full bg-black border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm" placeholder="Kovács Anna" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Email címed</label>
                <input required type="email" className="w-full bg-black border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm" placeholder="anna@email.com" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Üzenet</label>
                <textarea required rows={4} className="w-full bg-black border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm resize-none" placeholder="Miben segíthetek?"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-900/80 border border-purple-500 hover:bg-purple-600 text-white py-3 text-xs uppercase tracking-widest font-bold transition-all rounded-sm">
                Üzenet Küldése
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
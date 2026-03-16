import React from 'react';
import Link from 'next/link';

export default function NecklacesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Vissza gomb és Fejléc */}
      <div className="p-6 border-b border-purple-900/30 bg-purple-950/30 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <Link href="/" className="text-purple-300 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza a főoldalra
        </Link>
        <span className="font-serif tracking-[0.2em] text-white">A<span className="text-purple-400 italic">&</span>H</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        
        {/* Kategória Címe */}
        <div className="mb-12 border-l-2 border-purple-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wider mb-2">
            Spirituális <span className="text-purple-400 italic">Nyakláncok</span>
          </h1>
          <p className="text-purple-300 font-light text-sm tracking-widest uppercase mt-2">
            Védelem és harmónia a szívcsakrához közel
          </p>
        </div>

        {/* Leírás */}
        <p className="text-gray-300 font-light leading-relaxed mb-12 max-w-3xl">
          Minden nyaklánc egyedi, kézzel készített talizmán. A fémek és ásványok gondos kiválasztásával olyan energetikai mezőt hozunk létre, amely egész nap védi a viselőjét, miközben elegáns kiegészítőként is szolgál.
        </p>

        {/* TERMÉK RÁCS (A webadminból jövő adatok ide fognak betöltődni) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Termék Kártya 1 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-square bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Fekete Turmalin Védelmező</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Réz foglalat • Bőrszál</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">14.500 Ft</span>
              <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                Kosárba
              </button>
            </div>
          </div>

          {/* Termék Kártya 2 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-square bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Ametiszt Lélekhangoló</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Ezüstözött lánc • Nyugalom</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">16.900 Ft</span>
              <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                Kosárba
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
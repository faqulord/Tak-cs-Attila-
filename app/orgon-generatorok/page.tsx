import React from 'react';
import Link from 'next/link';
// BEHÚZZUK A KÖZPONTI ADATBÁZISUNKAT A KÓDBÓL:
import { products } from '@/data/products'; 

export default function OrgonitPage() {
  // A RENDSZEREZŐ KÓD: Csak az "orgonit" kategóriájú termékeket szűrjük ki!
  const orgonitok = products.filter(termek => termek.category === 'orgonit');

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      <div className="p-6 border-b border-purple-900/30 bg-purple-950/30 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <Link href="/" className="text-purple-300 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza a főoldalra
        </Link>
        <span className="font-serif tracking-[0.2em] text-white">A<span className="text-purple-400 italic">&</span>H</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="mb-12 border-l-2 border-purple-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wider mb-2">
            Orgon <span className="text-purple-400 italic">Generátorok</span>
          </h1>
          <p className="text-purple-300 font-light text-sm tracking-widest uppercase mt-2">
            Térharmonizálás és energetikai védelem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ITT TÖRTÉNIK A VARÁZSLAT: Végigmegyünk a szűrt listán, és mindegyikből rajzolunk egy kártyát */}
          {orgonitok.map((termek) => (
            <div key={termek.id} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
                <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Ha lesz rendes kép link, akkor azt mutatja, ha nincs, akkor egy dobozt */}
                {termek.imageUrl.includes('ide-jon') || termek.imageUrl.includes('valami') ? (
                  <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                    Kép helye: {termek.name}
                  </div>
                ) : (
                  <img src={termek.imageUrl} alt={termek.name} className="w-full h-full object-cover" />
                )}
              </div>
              <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">{termek.name}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">{termek.tags}</p>
              <div className="flex justify-between items-center">
                {/* Az árat megformázzuk, hogy szépen nézzen ki (pl. 22 500 Ft) */}
                <span className="text-lg font-light text-purple-200">
                  {termek.price.toLocaleString('hu-HU')} Ft
                </span>
                <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                  Kosárba
                </button>
              </div>
            </div>
          ))}

          {/* Ha esetleg még nincs feltöltve orgonit, kiírunk egy üzenetet */}
          {orgonitok.length === 0 && (
             <p className="text-gray-500 font-light">A műhelyben jelenleg készülnek az új alkotások...</p>
          )}

        </div>
      </div>
    </main>
  );
}
import React from 'react';
import Link from 'next/link';

export default function OrgoneGeneratorsPage() {
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
            Orgon <span className="text-purple-400 italic">Generátorok</span>
          </h1>
          <p className="text-purple-300 font-light text-sm tracking-widest uppercase mt-2">
            Térharmonizálás és energetikai védelem
          </p>
        </div>

        {/* --- TUDÁSBÁZIS / LEÍRÁS SZEKCIÓ --- */}
        <section className="mb-16 bg-zinc-950 border border-purple-900/30 p-8 md:p-12 rounded-lg relative overflow-hidden shadow-[0_0_30px_rgba(88,28,135,0.1)]">
          {/* Háttérfény effekt */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-900/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-2xl font-serif text-white mb-6">Mi az az Orgon Generátor?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 font-light leading-relaxed text-sm md:text-base text-justify">
            <div>
              <p className="mb-4">
                Az <strong>orgon energia</strong> koncepciója az 1930-as évekből származik, amikor Wilhelm Reich, osztrák pszichiáter és kutató felfedezett egy univerzális, mindenhol jelenlévő életenergiát. Ezt a finomenergiát a keleti kultúrák évezredek óta <em>chi</em>, <em>prána</em> vagy <em>éteri energia</em> néven ismerik.
              </p>
              <p>
                A modern orgon generátorok (orgonitok) szerves gyanta, szervetlen fémforgácsok és kvarckristályok szent geometriai elvek alapján megalkotott, precíz mátrixai. Nem csupán esztétikus kézműves tárgyak, hanem aktív, folyamatosan működő energetikai transzformátorok.
              </p>
            </div>
            <div>
              <p className="mb-4">
                <strong>Hogyan működik?</strong> A gyanta a kötési folyamat során zsugorodik, ezáltal állandó nyomás alá helyezi a benne lévő kvarckristályokat. Ez a nyomás aktiválja a kristályok <em>piezoelektromos hatását</em>, ami egyfajta energetikai motorként kezd el funkcionálni.
              </p>
              <p>
                A generátor magába szívja a környezetében lévő negatív, stagnáló energiákat (elektroszmog, stresszmezők), majd a kristályok frekvenciáján átszűrve tiszta, magas rezgésű, pozitív életerőként sugározza vissza azt a térbe. Tökéletes harmónia az anyag és a lélek között.
              </p>
            </div>
          </div>
        </section>

        {/* --- TERMÉK RÁCS (GRID) AZ ÚJ KÉPEK ALAPJÁN --- */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-light text-white tracking-widest uppercase">Elérhető alkotások</h3>
          <span className="text-xs text-gray-500 uppercase tracking-widest">{`Szűrés / Nézet`}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Gaia Magja */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Ide jöhet az img tag később! */}
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye: Gaia Magja
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Gaia Magja – Orgon Generátor</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Földelés • Stabilitás</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">22.500 Ft</span>
              <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                Kosárba
              </button>
            </div>
          </div>

          {/* 2. Viridis Flux */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye: Viridis Flux
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Viridis Flux – Orgon Generátor</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Víz–Szív–Megújulás</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">24.990 Ft</span>
              <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                Kosárba
              </button>
            </div>
          </div>

          {/* 3. Angyali Számok (111) */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye: 111 Orgonit
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Angyali Frekvencia (111)</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Új kezdetek • Szándék erősítés</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">18.000 Ft</span>
              <button className="border border-purple-500/50 hover:bg-purple-600 hover:border-purple-600 text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm transition-all">
                Kosárba
              </button>
            </div>
          </div>

          {/* 4. Zöld Spirálos */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-zinc-900 border border-purple-900/30 rounded-lg overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                Kép helye: Zöld Spirál
              </div>
            </div>
            <h3 className="text-lg font-serif text-white group-hover:text-purple-400 transition-colors">Smaragd Örvény Generátor</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-3">Energia fókuszálás</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light text-purple-200">19.500 Ft</span>
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
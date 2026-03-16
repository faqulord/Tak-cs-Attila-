import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Vissza gomb a fekete alapon */}
      <div className="p-6 border-b border-purple-900/30 bg-purple-950/30">
        <Link href="/" className="text-purple-300 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza a főoldalra
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 mt-10">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wider">
          Ki vagyok <span className="text-purple-400 italic">én?</span>
        </h1>
        <div className="w-20 h-1 bg-purple-600 mb-12"></div>

        <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg text-justify">
          <p>
            Üdvözlöm! Takács Attila vagyok, az At&Harmonies megálmodója. Utam évekkel ezelőtt kezdődött, amikor felismerem, hogy a minket körülvevő láthatatlan energiák milyen drasztikus hatással vannak a mindennapjainkra, a hangulatunkra és a spirituális fejlődésünkre.
          </p>
          
          {/* Kiemelt idézet doboz */}
          <div className="p-8 bg-zinc-950 border border-purple-900/50 rounded-lg shadow-lg my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px]"></div>
            <p className="text-xl font-serif text-white italic text-center">
              "A célom nem pusztán tárgyak alkotása. Hanem olyan energetikai eszközök létrehozása, amelyek megtisztítják a teret és megemelik a lelket."
            </p>
          </div>

          <p>
            A műhelyemben készült <strong className="text-white">Orgon Generátorok</strong> és ékszerek nem tömegcikkek. Minden egyes darabot személyesen, mély meditatív állapotban készítek, válogatott ásványokból, fémekből és tiszta gyantából, figyelve a szent geometria szabályaira.
          </p>
          <p>
            Hiszem, hogy az anyag és az energia tökéletes egyensúlya elhozhatja a várva várt harmóniát az otthonodba és az életedbe.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/kapcsolat" className="bg-purple-900 border border-purple-500 hover:bg-purple-700 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold rounded-sm transition-all">
            Lépj kapcsolatba velem
          </Link>
        </div>
      </article>

    </main>
  );
}
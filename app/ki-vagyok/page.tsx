import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#130725] text-purple-100 font-sans selection:bg-purple-500 selection:text-black pb-20">
      
      {/* Vissza gomb */}
      <div className="p-6">
        <Link href="/" className="text-purple-400 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza a főoldalra
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 mt-10">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wider">
          Ki vagyok <span className="text-purple-500 italic">én?</span>
        </h1>
        <div className="w-20 h-1 bg-purple-600 mb-12"></div>

        <div className="space-y-8 text-purple-200 font-light leading-relaxed text-lg text-justify">
          <p>
            Üdvözlöm! Takács Attila vagyok, az At&Harmonies megálmodója. Utam évekkel ezelőtt kezdődött, amikor felismerem, hogy a minket körülvevő láthatatlan energiák milyen drasztikus hatással vannak a mindennapjainkra, a hangulatunkra és a spirituális fejlődésünkre.
          </p>
          
          <div className="p-8 bg-black/50 border border-purple-900/50 rounded-lg shadow-lg my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px]"></div>
            <p className="text-xl font-serif text-white italic text-center">
              "A célom nem pusztán tárgyak alkotása. Hanem olyan energetikai eszközök létrehozása, amelyek megtisztítják a teret és megemelik a lelket."
            </p>
          </div>

          <p>
            A műhelyemben készült <strong>Orgon Generátorok</strong> és ékszerek nem tömegcikkek. Minden egyes darabot személyesen, mély meditatív állapotban készítek, válogatott ásványokból, fémekből és tiszta gyantából, figyelve a szent geometria szabályaira.
          </p>
          <p>
            Hiszem, hogy az anyag és az energia tökéletes egyensúlya elhozhatja a várva várt harmóniát az otthonodba és az életedbe.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/kapcsolat" className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold rounded-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
            Lépj kapcsolatba velem
          </Link>
        </div>
      </article>

    </main>
  );
}
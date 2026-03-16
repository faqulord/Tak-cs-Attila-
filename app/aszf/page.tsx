import React from 'react';
import Link from 'next/link';

export default function AszfPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      
      <div className="p-6 border-b border-purple-900/30 bg-purple-950/30 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md">
        <Link href="/" className="text-purple-300 hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
          <span>←</span> Vissza
        </Link>
        <span className="font-serif tracking-[0.2em] text-white">A<span className="text-purple-400 italic">&</span>H</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h1 className="text-3xl md:text-4xl font-serif text-white tracking-wider mb-8">
          Általános Szerződési <span className="text-purple-400 italic">Feltételek</span>
        </h1>
        
        <div className="space-y-8 text-gray-300 font-light text-sm md:text-base leading-relaxed text-justify">
          
          <section>
            <h2 className="text-xl font-serif text-white mb-4 border-l-2 border-purple-500 pl-4">1. Általános rendelkezések</h2>
            <p>
              A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Takács Attila (At&Harmonies) által üzemeltetett weboldalon történő vásárlás jogi feltételeit tartalmazza. A webshopban történő rendeléssel a vásárló elfogadja a jelen feltételeket. Minden termék egyedi kézműves alkotás, így apró eltérések a fotókhoz képest előfordulhatnak, melyek a termékek egyediségét igazolják.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 border-l-2 border-purple-500 pl-4">2. Rendelés és Fizetés</h2>
            <p>
              A weboldalon feltüntetett árak forintban értendők. A rendelés leadása után a vásárló egy visszaigazoló e-mailt kap. A fizetés történhet banki átutalással vagy utánvéttel a csomag átvételekor. Az egyedi megrendelésre készülő termékek esetén (pl. személyre szabott orgonit) a gyártás a vételár 50%-ának előreutalása után kezdődik meg.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 border-l-2 border-purple-500 pl-4">3. Szállítás</h2>
            <p>
              A készleten lévő termékeket a megrendeléstől számított 2-5 munkanapon belül átadjuk a futárszolgálatnak (GLS / Foxpost). Egyedi rendelés esetén a szállítási idő 1-3 hét is lehet, amelyről a megrendelőt előzetesen tájékoztatjuk. A szállítási költség a kosár folyamat során kerül pontosan kiszámításra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 border-l-2 border-purple-500 pl-4">4. Elállási jog és Garancia</h2>
            <p>
              A fogyasztót a törvény szerint 14 napos indokolás nélküli elállási jog illeti meg a termék átvételétől számítva. Az elállási jog nem gyakorolható az egyedi elképzelések alapján, személyre szabottan készített termékek (pl. hozott hajtincs, egyedi rezgés kód) esetén.
            </p>
          </section>

          <p className="text-xs text-purple-400 mt-12 uppercase tracking-widest text-center">
            Utolsó frissítés: 2026. március 16.
          </p>

        </div>
      </div>
    </main>
  );
}
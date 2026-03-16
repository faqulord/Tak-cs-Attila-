import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- HEADER --- */}
      <header className="p-6 border-b border-white/10 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="flex items-center gap-4">
          {/* Új, prémium monokróm logó */}
          <div className="w-10 h-10 border border-white flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
            <span className="text-white group-hover:text-black font-serif text-lg font-bold relative z-10 transition-colors duration-300">A&H</span>
          </div>
          <h1 className="text-2xl font-serif tracking-[0.2em] uppercase">
            At&Harmonies
          </h1>
        </div>
        
        {/* Új Ékszer Menüpontok */}
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Nyakláncok</a>
          <a href="#" className="hover:text-white transition-colors">Karkötők</a>
          <a href="#" className="hover:text-white transition-colors">Gyűrűk</a>
          <a href="#" className="hover:text-white transition-colors">Talizmánok</a>
        </nav>
        
        <button className="border border-white hover:bg-white hover:text-black px-6 py-2 text-xs uppercase tracking-widest transition-all">
          Kosár (0)
        </button>
      </header>

      {/* --- HERO SZEKCIÓ --- */}
      <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Monokróm fénysugár effekt */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] -z-10"></div>
        
        <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-wide">
          NYERS <span className="italic font-light text-gray-400">és</span> IGAZI
        </h2>
        <p className="max-w-xl text-gray-400 text-sm md:text-base mb-12 font-light tracking-wide leading-relaxed">
          Takács Attila kézműves ékszerei. 
          Ahol a sötétség formát ad a fénynek, és a fém találkozik a lélekkel.
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
          <div className="min-w-[85vw] md:min-w-[350px] h-[65vh] md:h-[550px] bg-zinc-900 relative snap-center overflow-hidden border border-white/10 group">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h4 className="text-2xl font-serif mb-2">Föld Anya Nyakék</h4>
              <p className="text-sm text-gray-400 mb-6 font-light">Kézzel kalapált réz textúra.</p>
              <button className="w-full bg-white text-black hover:bg-gray-200 py-4 text-xs uppercase tracking-widest font-bold transition-all">
                Részletek
              </button>
            </div>
          </div>

          {/* 2. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[350px] h-[65vh] md:h-[550px] bg-zinc-900 relative snap-center overflow-hidden border border-white/10 group">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h4 className="text-2xl font-serif mb-2">Éjfél Gyűrű</h4>
              <p className="text-sm text-gray-400 mb-6 font-light">Sötétített ezüst, letisztult forma.</p>
              <button className="w-full bg-transparent border border-white hover:bg-white hover:text-black text-white py-4 text-xs uppercase tracking-widest font-bold transition-all">
                Részletek
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-20 border-t border-white/10 py-12 text-center text-gray-500 text-xs uppercase tracking-widest">
        <p>&copy; 2026 At&Harmonies - Takács Attila.</p>
      </footer>
    </main>
  );
}
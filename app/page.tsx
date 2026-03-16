import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-700 selection:text-white">
      
      {/* --- HEADER --- */}
      <header className="p-6 border-b border-stone-800 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-stone-950/80">
        <div className="flex items-center gap-2">
          {/* Műhely + Spirituális logó ikon helye */}
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <span className="text-amber-500 font-bold text-sm">A&H</span>
          </div>
          <h1 className="text-2xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
            At&Harmonies
          </h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm tracking-wider">
          <a href="#" className="hover:text-amber-400 transition-colors">Műhely</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Kollekciók</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Kapcsolat</a>
        </nav>
        <button className="bg-amber-800 hover:bg-amber-700 text-white px-5 py-2 rounded-md text-sm transition-all shadow-lg hover:shadow-amber-900/50">
          Kosár (0)
        </button>
      </header>

      {/* --- HERO SZEKCIÓ --- */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Háttér "aura" effekt */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full -z-10"></div>
        
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          Harmónia a <span className="text-amber-500 italic">kézművességben</span>
        </h2>
        <p className="max-w-2xl text-stone-400 text-lg md:text-xl mb-10 font-light">
          Fedezd fel Takács Attila egyedi, kézzel készített alkotásait. 
          Ahol a nyers anyag találkozik a spirituális energiával.
        </p>
      </section>

      {/* --- TIKTOK STÍLUSÚ VIDEÓS SZEKCIÓ (SWIPE) --- */}
      <section className="py-10">
        <div className="px-6 mb-6 flex justify-between items-end">
          <h3 className="text-2xl font-light border-l-2 border-amber-500 pl-3">Kiemelt Alkotások</h3>
          <span className="text-xs text-stone-500 uppercase tracking-widest">Húzd oldalra ➔</span>
        </div>

        {/* Scroll-snap konténer: Ez adja a húzogatós élményt */}
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          
          {/* 1. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[300px] h-[60vh] md:h-[500px] bg-stone-900 rounded-xl relative snap-center overflow-hidden border border-stone-800 shadow-2xl">
            {/* Ide jön majd az igazi videó */}
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h4 className="text-xl font-medium text-amber-300 mb-1">Föld Anya Nyakék</h4>
              <p className="text-sm text-stone-300 mb-4 line-clamp-2">Kézzel kalapált réz és nyers smaragd tökéletes egyensúlya.</p>
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-3 rounded-lg border border-white/20 transition-all">
                Megnézem
              </button>
            </div>
          </div>

          {/* 2. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[300px] h-[60vh] md:h-[500px] bg-stone-900 rounded-xl relative snap-center overflow-hidden border border-stone-800 shadow-2xl">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h4 className="text-xl font-medium text-amber-300 mb-1">Lélekhangoló Tál</h4>
              <p className="text-sm text-stone-300 mb-4 line-clamp-2">Rezgésterápiához és meditációhoz hangolva a műhelyből.</p>
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-3 rounded-lg border border-white/20 transition-all">
                Megnézem
              </button>
            </div>
          </div>

          {/* 3. Videó Kártya */}
          <div className="min-w-[85vw] md:min-w-[300px] h-[60vh] md:h-[500px] bg-stone-900 rounded-xl relative snap-center overflow-hidden border border-stone-800 shadow-2xl">
            <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
              <span className="text-stone-500">Videó helye...</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h4 className="text-xl font-medium text-amber-300 mb-1">Műhely Titkok</h4>
              <p className="text-sm text-stone-300 mb-4 line-clamp-2">Így készülnek az At&Harmonies ékszerek.</p>
              <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-3 rounded-lg border border-white/20 transition-all">
                Megnézem
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-20 border-t border-stone-900 py-10 text-center text-stone-600 text-sm">
        <p>&copy; 2026 At&Harmonies - Takács Attila. Minden jog fenntartva.</p>
        <p className="mt-2 text-xs">A lelki békéd és a stílusod találkozása.</p>
      </footer>
    </main>
  );
}
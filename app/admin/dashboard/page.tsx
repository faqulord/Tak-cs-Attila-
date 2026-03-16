import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans">
      
      {/* OLDALSÁV (SIDEBAR) */}
      <aside className="w-64 border-r border-white/10 hidden md:block p-6">
        <div className="mb-12">
          <h2 className="text-xl font-serif tracking-widest">A&H ADMIN</h2>
        </div>
        <nav className="space-y-4 text-sm tracking-wider text-gray-400">
          <a href="#" className="block text-white">Vezérlőpult</a>
          <a href="#" className="block hover:text-white transition-colors">Termékek Kezelése</a>
          <a href="#" className="block hover:text-white transition-colors">Rendelések</a>
          <a href="#" className="block hover:text-white transition-colors">Beállítások</a>
        </nav>
      </aside>

      {/* FŐ TARTALOM */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="text-2xl font-light tracking-wide">Áttekintés</h1>
          <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-white border border-white/10 px-4 py-2">Kijelentkezés</button>
        </header>

        {/* STATISZTIKÁK (Bevétel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-white/10 p-6 bg-zinc-900/50">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Havi Bevétel</h3>
            <p className="text-3xl font-serif">845,000 Ft</p>
            <span className="text-emerald-500 text-xs mt-2 block">+12% az előző hónaphoz képest</span>
          </div>
          <div className="border border-white/10 p-6 bg-zinc-900/50">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Aktív Rendelések</h3>
            <p className="text-3xl font-serif">14 db</p>
          </div>
          <div className="border border-white/10 p-6 bg-zinc-900/50">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Összes Termék</h3>
            <p className="text-3xl font-serif">42 db</p>
          </div>
        </div>

        {/* TERMÉKEK KEZELÉSE LISTA */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-light">Legutóbbi Termékek</h2>
            <button className="bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-gray-200">
              + Új Termék
            </button>
          </div>

          <div className="border border-white/10">
            {/* Termék sor 1 */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800"></div> {/* Ide jön a kiskép */}
                <div>
                  <h4 className="font-medium">Föld Anya Nyakék</h4>
                  <p className="text-xs text-gray-500">Nyaklánc • 45,000 Ft</p>
                </div>
              </div>
              <button className="text-xs border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors">Szerkesztés</button>
            </div>

            {/* Termék sor 2 */}
            <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800"></div> {/* Ide jön a kiskép */}
                <div>
                  <h4 className="font-medium">Éjfél Gyűrű</h4>
                  <p className="text-xs text-gray-500">Gyűrű • 28,000 Ft</p>
                </div>
              </div>
              <button className="text-xs border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors">Szerkesztés</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
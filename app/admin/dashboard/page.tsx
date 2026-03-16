"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Fülek (Tabs) kezelése: 'overview' (Áttekintés) vagy 'upload' (Feltöltés)
  const [activeTab, setActiveTab] = useState('overview');

  // Űrlap állapotai
  const [name, setName] = useState('');
  const [category, setCategory] = useState('orgonit');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');

  // Mentés az adatbázisba
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Mentés folyamatban... ⏳');

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, category, price, description, imageUrl }),
      });

      if (res.ok) {
        setStatus('Sikeresen élesítve a webshopban! ✅');
        setName(''); setPrice(''); setDescription(''); setImageUrl('');
        setTimeout(() => setStatus(''), 5000); // 5 mp után eltűnik az üzenet
      } else {
        setStatus('Hiba történt a mentéskor. ❌');
      }
    } catch (error) {
      setStatus('Hálózati hiba. ❌');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0510] text-white flex font-sans selection:bg-purple-500">
      
      {/* --- OLDALSÁV (SIDEBAR) --- */}
      <aside className="w-64 border-r border-purple-900/30 hidden md:block p-6 bg-black/80 shadow-[10px_0_30px_rgba(88,28,135,0.1)] z-10">
        <div className="mb-12">
          <h2 className="text-xl font-serif tracking-widest text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            A<span className="text-purple-500 italic">&</span>H ADMIN
          </h2>
          <p className="text-[9px] text-purple-400 uppercase tracking-widest mt-1">Vezérlőpult</p>
        </div>
        
        <nav className="space-y-4 text-xs tracking-widest uppercase font-bold text-gray-500">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`block w-full text-left pl-4 py-2 border-l-2 transition-colors ${activeTab === 'overview' ? 'border-purple-500 text-white bg-purple-900/20' : 'border-transparent hover:text-purple-300'}`}
          >
            Havi Összesítő
          </button>
          <button 
            onClick={() => setActiveTab('upload')}
            className={`block w-full text-left pl-4 py-2 border-l-2 transition-colors ${activeTab === 'upload' ? 'border-purple-500 text-white bg-purple-900/20' : 'border-transparent hover:text-purple-300'}`}
          >
            Új Termék Élesítése
          </button>
          <div className="w-full h-[1px] bg-purple-900/30 my-6"></div>
          <Link href="/" className="block pl-4 py-2 hover:text-white transition-colors">
            leftarrow Ugrás a Webshopba
          </Link>
        </nav>
      </aside>

      {/* --- FŐ TARTALOM --- */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto relative">
        {/* Háttérfény */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        {/* 1. NÉZET: HAVI ÖSSZESÍTŐ (STATISZTIKÁK) */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <header className="mb-10 border-b border-purple-900/30 pb-6">
              <h1 className="text-3xl font-serif tracking-wider text-white">Statisztikák <span className="text-purple-400 italic">&</span> Eladások</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Áttekintés a jelenlegi hónapról</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Stat 1: Bevétel */}
              <div className="bg-black/50 border border-purple-900/40 p-6 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 blur-[20px]"></div>
                <h3 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Havi Nettó Bevétel</h3>
                <p className="text-4xl font-serif text-white">0 <span className="text-lg text-purple-400">Ft</span></p>
                <span className="text-emerald-500 text-[10px] uppercase tracking-widest mt-4 block border-t border-purple-900/30 pt-4">Nincs elegendő adat</span>
              </div>

              {/* Stat 2: Eladások */}
              <div className="bg-black/50 border border-purple-900/40 p-6 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-[20px]"></div>
                <h3 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Havi Eladott Termékek</h3>
                <p className="text-4xl font-serif text-white">0 <span className="text-lg text-purple-400">db</span></p>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-4 block border-t border-purple-900/30 pt-4">Rendelési rendszer előkészítve</span>
              </div>

              {/* Stat 3: Raktár / Aktív termékek */}
              <div className="bg-black/50 border border-purple-900/40 p-6 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 blur-[20px]"></div>
                <h3 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Feltöltött Termékek</h3>
                <p className="text-4xl font-serif text-white flex items-baseline gap-2">
                  Adatbázis <span className="text-emerald-400 text-sm tracking-widest uppercase font-sans">Aktív</span>
                </p>
                <button onClick={() => setActiveTab('upload')} className="text-purple-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest mt-4 block border-t border-purple-900/30 pt-4 w-full text-left">
                  + Új termék hozzáadása
                </button>
              </div>
            </div>
            
            <div className="bg-black/50 border border-purple-900/40 p-8 rounded-lg">
               <h3 className="text-lg font-serif mb-4 text-purple-200">Rendszer Üzenetek</h3>
               <p className="text-sm text-gray-400 font-light">Az adatbázis kapcsolat sikeresen létrejött. A rendszer készen áll a termékek élesítésére. A kosár és fizetési modul integrálása után a havi eladások automatikusan frissülni fognak.</p>
            </div>
          </div>
        )}

        {/* 2. NÉZET: TERMÉK FELTÖLTÉS (ŰRLAP) */}
        {activeTab === 'upload' && (
          <div className="animate-fade-in max-w-2xl">
            <header className="mb-10 border-b border-purple-900/30 pb-6">
              <h1 className="text-3xl font-serif tracking-wider text-white">Termék <span className="text-purple-400 italic">Élesítése</span></h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">A termék azonnal megjelenik a webshopban</p>
            </header>

            <div className="bg-black/80 border border-purple-900/50 p-8 rounded-lg shadow-[0_0_40px_rgba(88,28,135,0.15)] backdrop-blur-md">
              
              {status && (
                <div className={`p-4 mb-8 text-xs uppercase tracking-widest font-bold border rounded-sm text-center ${status.includes('✅') ? 'bg-emerald-950/30 text-emerald-400 border-emerald-800/50' : status.includes('⏳') ? 'bg-purple-950/30 text-purple-300 border-purple-800/50' : 'bg-red-950/30 text-red-400 border-red-800/50'}`}>
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-2">Termék Neve</label>
                    <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-950/50 border border-purple-900/50 text-white p-4 focus:border-purple-400 focus:bg-black focus:outline-none transition-all rounded-sm font-light" placeholder="Pl: Metatron Kockája Medál" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-2">Ár (Forintban)</label>
                    <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-zinc-950/50 border border-purple-900/50 text-white p-4 focus:border-purple-400 focus:bg-black focus:outline-none transition-all rounded-sm font-light" placeholder="18500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-2">Kategória (Melyik menüpontba kerüljön?)</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-zinc-950/50 border border-purple-900/50 text-white p-4 focus:border-purple-400 focus:bg-black focus:outline-none transition-all rounded-sm appearance-none font-light">
                    <option value="orgonit">Orgon Generátor</option>
                    <option value="nyaklanc">Nyaklánc</option>
                    <option value="karperec">Karperec</option>
                    <option value="kellek">Kellék / Eszköz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-2">Kép Linkje (URL)</label>
                  <input type="url" required value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full bg-zinc-950/50 border border-purple-900/50 text-white p-4 focus:border-purple-400 focus:bg-black focus:outline-none transition-all rounded-sm font-light text-sm" placeholder="https://i.ibb.co/valami/kep.jpg" />
                  <p className="text-[10px] text-gray-500 mt-2 tracking-widest">Töltsd fel a képet az ImgBB.com-ra, és másold be ide a direkt linket!</p>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-purple-300 mb-2">Energetikai Leírás</label>
                  <textarea required rows={5} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-zinc-950/50 border border-purple-900/50 text-white p-4 focus:border-purple-400 focus:bg-black focus:outline-none transition-all rounded-sm resize-none font-light leading-relaxed" placeholder="Milyen kristályokat tartalmaz? Milyen csakrára hat?"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-purple-700 hover:bg-purple-500 border border-purple-400 text-white py-4 text-xs uppercase tracking-widest font-bold transition-all rounded-sm shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    Mentés & Élesítés a Webshopban
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
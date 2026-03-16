"use client";

import React, { useState } from 'react';

export default function AdminDashboard() {
  // Űrlap állapotai (amiket beírsz)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('orgonit');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');

  // Mentés gomb megnyomása
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Mentés az adatbázisba folyamatban... ⏳');

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, category, price, description, imageUrl }),
      });

      if (res.ok) {
        setStatus('Sikeresen elmentve az adatbázisba! ✅');
        // Mezők kiürítése a sikeres mentés után
        setName(''); setPrice(''); setDescription(''); setImageUrl('');
      } else {
        setStatus('Hiba történt a mentéskor. ❌');
      }
    } catch (error) {
      setStatus('Hálózati hiba. ❌');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0510] text-white flex font-sans selection:bg-purple-500">
      
      {/* OLDALSÁV */}
      <aside className="w-64 border-r border-purple-900/30 hidden md:block p-6 bg-black/50">
        <div className="mb-12">
          <h2 className="text-xl font-serif tracking-widest text-white">A<span className="text-purple-500 italic">&</span>H ADMIN</h2>
        </div>
        <nav className="space-y-6 text-xs tracking-widest uppercase text-purple-300">
          <a href="#" className="block text-white border-l-2 border-purple-500 pl-3">Új Termék</a>
          <a href="#" className="block hover:text-white transition-colors pl-3">Készlet (Hamarosan)</a>
          <a href="#" className="block hover:text-white transition-colors pl-3">Videók (Hamarosan)</a>
        </nav>
      </aside>

      {/* FŐ TARTALOM */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12 border-b border-purple-900/30 pb-6">
          <h1 className="text-2xl font-light tracking-wide">Termék Feltöltése</h1>
          <a href="/" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white border border-purple-900/50 px-4 py-2 rounded-sm transition-all">Vissza a Webshopba</a>
        </header>

        <div className="max-w-2xl bg-black border border-purple-900/30 p-8 rounded-lg shadow-[0_0_30px_rgba(88,28,135,0.1)]">
          
          {/* Státusz üzenet (Siker/Hiba) */}
          {status && (
            <div className={`p-4 mb-6 text-xs uppercase tracking-widest font-bold border rounded-sm ${status.includes('✅') ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800' : status.includes('⏳') ? 'bg-purple-950/50 text-purple-300 border-purple-800' : 'bg-red-950/50 text-red-400 border-red-800'}`}>
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Termék Neve</label>
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-950 border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm" placeholder="Pl: Gaia Magja" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Ár (Forintban)</label>
                <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-zinc-950 border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm" placeholder="24990" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Kategória</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-zinc-950 border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm appearance-none">
                <option value="orgonit">Orgon Generátor</option>
                <option value="nyaklanc">Nyaklánc</option>
                <option value="karperec">Karperec</option>
                <option value="kellek">Kellék / Eszköz</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Kép URL (Link)</label>
              <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full bg-zinc-950 border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm" placeholder="Pl: https://..." />
              <p className="text-[10px] text-gray-500 mt-2">Később megcsináljuk a közvetlen képfeltöltést, egyelőre egy kép linkjét kell ide bemásolni.</p>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Rövid Leírás</label>
              <textarea required rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-zinc-950 border border-purple-900/50 text-white p-3 focus:border-purple-500 focus:outline-none transition-colors rounded-sm resize-none" placeholder="Energetikai tulajdonságok..."></textarea>
            </div>

            <button type="submit" className="w-full bg-purple-900 hover:bg-purple-600 border border-purple-500 text-white py-4 text-xs uppercase tracking-widest font-bold transition-all rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Mentés az Adatbázisba
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Megakadályozza az oldal újratöltését
    
    // Egyszerű ellenőrzés a demo kedvéért
    if (username === 'admin' && password === 'admin123') {
      router.push('/admin/dashboard');
    } else {
      setError('Hibás felhasználónév vagy jelszó!');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-white/10 bg-black p-8 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-serif tracking-widest text-white mb-2">AT&HARMONIES</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Adminisztrációs Rendszer</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 text-xs p-3 text-center uppercase tracking-widest">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Felhasználónév</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-white p-3 focus:border-white focus:outline-none transition-colors"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Jelszó</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-white p-3 focus:border-white focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-black font-bold py-3 uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors mt-4"
          >
            Belépés a vezérlőpultba
          </button>
        </form>
      </div>
    </div>
  );
}
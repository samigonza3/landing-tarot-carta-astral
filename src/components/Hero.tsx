import React from 'react';
import { Moon, Stars, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-20 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        <Stars className="inline-block w-12 h-12 text-purple-400 animate-pulse mb-4" />
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-[Cinzel]">
          Descubre Tu Destino
        </h1>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Lecturas de Tarot y Carta Astral con un enfoque moderno y místico. 
          Conecta con las energías del universo y encuentra tu camino.
        </p>
        <a 
          href="#reservar"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/50"
        >
          Reserva Tu Lectura
        </a>
      </div>
    </div>
  );
}
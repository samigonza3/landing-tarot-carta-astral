import React from 'react';
import { Moon, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <Moon className="w-8 h-8 text-purple-400 mr-2" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Samael G. - Tarot y Carta Astral
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-purple-300 text-sm">
          © 2025 Samael. Lectura de Tarot y Carta Astral en Cali. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
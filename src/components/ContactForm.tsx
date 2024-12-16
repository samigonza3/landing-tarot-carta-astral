import React from 'react';
import { Send, Clock, Calendar } from 'lucide-react';

export default function ContactForm() {
  return (
    <div id="reservar" className="py-24 bg-gradient-to-t from-black to-purple-900/20 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16">
          Reserva Tu Sesión
        </h2>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-purple-300 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white focus:outline-none focus:border-pink-500 transition-colors duration-300"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label className="block text-purple-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white focus:outline-none focus:border-pink-500 transition-colors duration-300"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-purple-300 mb-2">Servicio</label>
              <select className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white focus:outline-none focus:border-pink-500 transition-colors duration-300">
                <option value="">Selecciona un servicio</option>
                <option value="tarot">Lectura de Tarot</option>
                <option value="astral">Carta Astral</option>
              </select>
            </div>
            
            <div>
              <label className="block text-purple-300 mb-2">Mensaje</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white focus:outline-none focus:border-pink-500 transition-colors duration-300"
                rows={4}
                placeholder="¿Tienes alguna pregunta específica?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
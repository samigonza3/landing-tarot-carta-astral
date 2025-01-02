import React from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <div id="reservar" className="py-24 bg-gradient-to-t from-black to-purple-900/20 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Reserva Tu Sesión
        </h2>
        
        <p className="text-purple-200 text-center mb-12 max-w-2xl mx-auto">
          Completa el siguiente formulario para solicitar tu lectura personalizada. 
          Te responderemos en un plazo máximo de 24 horas.
        </p>

        <div className="max-w-3xl mx-auto bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJq3HiqCiJGfZJwv2ooofSOFZhaIVF-K47AsvuWPiIh81tFg/viewform?embedded=true" className="w-full h-[600px] rounded-lg" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>
      </div>
    </div>
  );
}
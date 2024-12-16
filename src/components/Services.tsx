import React from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';

const services = [
  {
    title: "Lectura de Tarot",
    price: "$180.000 COP",
    description: "Descubre las respuestas que buscas a través de las cartas del tarot",
    features: ["Sesión de 30 minutos", "Respuesta a preguntas específicas sobre amor, trabajo, finanzas o crecimiento personal", "Exploración de las energías presentes en tu vida"],
    icon: <Sparkles className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Interpretación de Carta Astral",
    price: "$150.000",
    description: "Conoce tu esencia y desbloquea tu potencial con la Astrología.",
    features: ["Sesión de 45 minutos", "Carta astral impresa", "Exploración de tu sol, luna, ascendente y casas astrológicas", "Respuesta a preguntas"],
    icon: <Moon className="w-8 h-8 text-purple-400" />
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16">
          Servicios Místicos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative p-8 rounded-xl bg-gradient-to-b from-purple-900/50 to-black border border-purple-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -right-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{service.title}</h3>
              <p className="text-3xl font-bold text-white mb-4">{service.price}</p>
              <p className="text-purple-200 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-purple-300">
                    <Sun className="w-4 h-4 mr-2 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#reservar"
                className="block w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
              >
                Reservar Ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
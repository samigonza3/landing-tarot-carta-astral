import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative aspect-square w-72 mx-auto overflow-hidden rounded-2xl border-2 border-purple-500/30">
              <img 
                src="/samuel-perfil.6836711e.jpg" 
                alt="Samuel G. Tarotista Astrologo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                ¿Quién soy?
              </h2>
            </div>
            
            <h3 className="text-4xl font-bold text-purple-300 mb-6 font-cinzel">
              Samuel G.
            </h3>
            
            <p className="text-purple-200 mb-6">
              Con más de una década de experiencia en las artes místicas, me dedico a guiar a las personas 
              en su viaje de autodescubrimiento a través del Tarot y la Astrología. Mi enfoque combina la 
              sabiduría ancestral con una perspectiva moderna y práctica.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <h4 className="font-bold text-purple-300 mb-2">10+ Años</h4>
                <p className="text-purple-200 text-sm">de Experiencia Mística</p>
              </div>
              <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <h4 className="font-bold text-purple-300 mb-2">1000+</h4>
                <p className="text-purple-200 text-sm">Lecturas Realizadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
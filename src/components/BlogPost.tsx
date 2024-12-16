import React from 'react';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-pink-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          <article className="max-w-3xl mx-auto">
            <header className="mb-12">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-cinzel">
                Los Arcanos Mayores: Guía Completa
              </h1>
              
              <div className="flex items-center space-x-6 text-purple-300">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Por Mystic Insights</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min de lectura</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>Tarot</span>
                </div>
              </div>
            </header>

            <img 
              src="https://images.unsplash.com/photo-1566438480900-0609be27a4be"
              alt="Cartas del Tarot"
              className="w-full h-[400px] object-cover rounded-xl mb-12"
            />

            <div className="prose prose-invert prose-purple max-w-none">
              <p className="text-lg text-purple-200 mb-6">
                Los Arcanos Mayores son las 22 cartas más significativas del Tarot, cada una representando 
                poderosos arquetipos y momentos cruciales en nuestro viaje espiritual. Estas cartas son 
                consideradas el corazón del Tarot, conteniendo las lecciones más profundas y transformadoras.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">El Significado de los Arcanos</h2>
              <p className="text-purple-200 mb-6">
                Cada Arcano Mayor representa una etapa específica en nuestro viaje espiritual, desde 
                El Loco (0) hasta El Mundo (XXI). Estas cartas nos guían a través de las lecciones 
                fundamentales de la vida, reflejando los arquetipos universales que todos encontramos 
                en nuestro camino de desarrollo personal.
              </p>

              <h3 className="text-xl font-bold text-purple-300 mb-4">Los Primeros Arcanos</h3>
              <ul className="list-disc list-inside text-purple-200 mb-6">
                <li>El Loco (0): El inicio del viaje, la inocencia y la espontaneidad</li>
                <li>El Mago (I): El poder de la manifestación y la acción consciente</li>
                <li>La Sacerdotisa (II): La sabiduría intuitiva y los misterios ocultos</li>
                <li>La Emperatriz (III): La abundancia y la creatividad natural</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">Interpretación en Lecturas</h2>
              <p className="text-purple-200 mb-6">
                Cuando un Arcano Mayor aparece en una lectura, su mensaje tiene un peso especial. 
                Estas cartas suelen indicar momentos significativos, lecciones importantes o 
                cambios transformadores en nuestras vidas. Su presencia nos invita a prestar 
                especial atención a los temas arquetípicos que representan.
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-4 my-8">
                <p className="text-xl text-purple-300 italic">
                  "Los Arcanos Mayores son el mapa de nuestra evolución espiritual, cada carta 
                  una estrella guía en nuestro camino hacia la iluminación y el autoconocimiento."
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">Trabajando con los Arcanos</h2>
              <p className="text-purple-200 mb-6">
                Para profundizar en el estudio de los Arcanos Mayores, se recomienda:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-6">
                <li>Meditar con una carta diferente cada día</li>
                <li>Llevar un diario de las intuiciones y mensajes recibidos</li>
                <li>Estudiar los símbolos y colores de cada carta</li>
                <li>Relacionar las cartas con experiencias personales</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}
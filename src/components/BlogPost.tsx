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
                  <span>Por Samuel</span>
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
              Los Arcanos Mayores son las cartas más importantes del Tarot. Representan lecciones universales, caminos de vida y energías arquetípicas que nos guían en nuestro viaje espiritual y personal. Si estás comenzando tu camino en el tarot o quieres profundizar más, esta guía te ayudará a comprender cada carta y su significado.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">¿Qué son los Arcanos Mayores?
</h2>
              <p className="text-purple-200 mb-6">
              El Tarot está compuesto por 78 cartas, divididas en dos grupos:
              <ul className="list-disc list-inside text-purple-200 mb-6">
                <li>Arcanos Mayores (22 cartas): Representan eventos significativos y arquetipos universales.</li>
                <li>Arcanos Menores (56 cartas): Detallan situaciones cotidianas y aspectos específicos de la vida.</li>
              </ul>
              Los Arcanos Mayores son el corazón del Tarot. Cada carta simboliza una etapa de nuestro viaje espiritual, también llamado el Viaje del Loco, donde el protagonista (el Loco, carta 0) atraviesa experiencias y desafíos que lo transforman.
              </p>

              <h3 className="text-xl font-bold text-purple-300 mb-4">Lista de los 22 Arcanos Mayores y sus Significados</h3>
              <ul className="list-disc list-inside text-purple-200 mb-6">
                <li>0 - El Loco: Representa el inicio de un viaje lleno de aventuras, inocencia y posibilidades.</li>
                <li>1 - El Mago: Simboliza el poder de manifestar tus deseos usando tus talentos y recursos.</li>
                <li>2 - La Sacerdotisa: Conecta con la intuición, el misterio y la sabiduría interior oculta.</li>
                <li>3 - La Emperatriz: Expresa abundancia, fertilidad y el amor maternal que nutre.</li>
                <li>4 - El Emperador: Representa la estructura, el control y la autoridad en tu vida.</li>
                <li>5 - El Hierofante: Señala el aprendizaje espiritual, las tradiciones y el conocimiento sagrado.</li>        
                <li>6 - Los Enamorados: Refleja decisiones importantes, el amor y la armonía en las relaciones.</li>
                <li>7 - El Carro: Simboliza la determinación, la victoria y el avance hacia tus metas.</li>
                <li>8 - La Fuerza: Habla de coraje, autocontrol y dominio de las emociones internas.</li>
                <li>9 - El Ermitaño: Invita a la introspección, la soledad y la búsqueda de la verdad interior.</li>
                <li>10 - La Rueda de la Fortuna: Representa los cambios, ciclos y las oportunidades que trae la vida.</li>
                <li>11 - La Justicia: Simboliza el equilibrio, la verdad y la toma de decisiones justas.</li>
                <li>12 - El Colgado: Indica pausa, sacrificio y la necesidad de ver las cosas desde otra perspectiva.</li>
                <li>13 - La Muerte: Representa el fin de un ciclo, la transformación y el renacimiento personal.</li>
                <li>14 - La Templanza: Sugiere armonía, moderación y la búsqueda del equilibrio en tu vida.</li>
                <li>15 - El Diablo: Habla de ataduras, tentaciones y la necesidad de enfrentar tus sombras.</li>
                <li>16 - La Torre: Señala cambios abruptos, crisis necesarias y revelaciones que transforman.</li>
                <li>17 - La Estrella: Representa la esperanza, la inspiración y la conexión con tu propósito.</li>
                <li>18 - La Luna: Refleja ilusiones, emociones ocultas y la necesidad de escuchar tu intuición.</li>
                <li>19 - El Sol: Simboliza éxito, alegría, claridad y el brillo que compartes con el mundo.</li>
                <li>20 - El Juicio: Indica renovación, un despertar espiritual y el llamado a renacer.</li>
                <li>21 - El Mundo: Representa la culminación de un ciclo, la realización y la plenitud.</li>
              </ul>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">Cómo Interpretar los Arcanos Mayores</h2>
              <p className="text-purple-200 mb-6">
              <ul className="list-disc list-inside text-purple-200 mb-6">
              <li>Conéctate con la carta: Observa las imágenes, colores y símbolos.</li>
              <li>Escucha tu intuición: ¿Qué sientes cuando ves la carta?</li>
              <li>Considera el contexto: La posición en la lectura y las preguntas del consultante son claves.</li>
              <li>Relaciónalas entre sí: Los Arcanos Mayores cuentan una historia; busca conexiones.</li></ul>
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-4 my-8">
                <p className="text-xl text-purple-300 italic">
                  "Los Arcanos Mayores son el mapa de nuestra evolución espiritual, cada carta 
                  una estrella guía en nuestro camino hacia la iluminación y el autoconocimiento."
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">Trabajando con los Arcanos</h2>
              <p className="text-purple-200 mb-6">
              Los Arcanos Mayores son un espejo de nuestra vida y nuestra alma. Estudiarlos te ayudará no solo a leer el Tarot con mayor profundidad, sino también a conocerte mejor y encontrar respuestas a tus preguntas más importantes. Si quieres experimentar una lectura personalizada que te guíe en tu camino, no dudes en agendar una sesión conmigo.
              </p>
              <a 
          href="#reservar"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/50"
        >
          Reserva Tu Consulta
        </a>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}
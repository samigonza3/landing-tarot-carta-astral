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
              Astrología y Destino: Cómo los planetas influyen en nuestro camino vital
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
              La astrología es una herramienta ancestral que nos conecta con el universo y sus energías. Los planetas, con su posición y movimiento, actúan como guías cósmicos, influyendo en las oportunidades, desafíos y lecciones que encontramos en nuestro camino. En este artículo descubrirás cómo cada planeta juega un papel fundamental en tu destino y en la construcción de tu camino vital.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">¿Qué relación hay entre astrología y destino?
</h2>
              <p className="text-purple-200 mb-6">
              La carta natal, un mapa del cielo en el momento exacto de tu nacimiento, revela las energías planetarias que influyen en tu personalidad y misión de vida. Los planetas, al moverse a través de los signos y casas astrológicas, actúan como maestros, trayendo momentos de crecimiento, introspección y transformación. Si bien no determinan tu destino, ofrecen claves valiosas para entender tu propósito y cómo navegar las diferentes etapas de tu vida.
              </p>

              <h3 className="text-xl font-bold text-purple-300 mb-4">Los planetas y su influencia en tu camino vital</h3>
              <p className="text-purple-200 mb-6">
              A continuación, te explico cómo cada planeta influye en tu destino, su simbolismo y cómo aprovechar su energía:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-6">
                <li>☉ El Sol: Tu esencia y propósito de vida. El Sol representa tu identidad, tu yo más profundo y tu vocación. Es el faro que ilumina quién eres y hacia dónde quieres ir. Su signo revela cómo brillas y manifiestas tu potencial único.</li>
                <li>☽ La Luna: Tus emociones y necesidades internas. La Luna refleja tus emociones, tu mundo interior y cómo buscas seguridad emocional. Su posición muestra lo que necesitas para sentirte pleno y conectado contigo mismo.</li>
                <li>☿ Mercurio: Tu mente y forma de comunicarte. Mercurio rige tu pensamiento, tu intelecto y la manera en que aprendes y te comunicas. Este planeta te ayuda a tomar decisiones y a adaptarte al cambio.</li>
                <li>♀ Venus: El amor, las relaciones y los valores. Venus simboliza el amor, la belleza y tus deseos. Influye en cómo te relacionas con los demás, lo que valoras y cómo disfrutas del placer y la armonía.</li>
                <li>♂ Marte: Acción, deseo y fuerza de voluntad. Marte representa tu energía, tu pasión y tu capacidad de actuar. Este planeta te impulsa a perseguir tus metas y enfrentar los desafíos con valentía.</li>
                <li>♃ Júpiter: La expansión y la buena fortuna. Júpiter es el planeta de la abundancia, el crecimiento y las oportunidades. Su energía te guía hacia la expansión personal, el optimismo y la búsqueda del sentido de la vida.</li>
                <li>♄ Saturno: Las lecciones, la disciplina y el karma. Saturno es el gran maestro que trae retos, responsabilidades y estructura. Aunque sus pruebas pueden ser difíciles, te ayudan a madurar y construir bases sólidas en tu vida.</li>
                <li>♅ Urano: El cambio, la innovación y la libertad. Urano es el planeta de la revolución y la transformación inesperada. Te impulsa a romper límites, pensar fuera de lo convencional y abrazar tu individualidad.</li>  
                <li>♆ Neptuno: La espiritualidad y los sueños. Neptuno conecta con tu imaginación, tu intuición y tus anhelos espirituales. Es el planeta que disuelve barreras y te ayuda a conectar con lo intangible y trascendental.</li>
                <li>♇ Plutón: La transformación y el renacimiento. Plutón simboliza el poder, la muerte y el renacimiento. Su influencia te lleva a enfrentar tus sombras, soltar lo que ya no sirve y renacer con mayor fuerza y claridad.</li>  
                </ul>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">El libre albedrío y los planetas</h2>
              <p className="text-purple-200 mb-6">
              Si bien los planetas marcan tendencias y momentos importantes, tú siempre tienes el poder de elegir cómo responder a estas energías. La astrología no define tu destino, sino que te ofrece un mapa para navegar mejor la vida y aprovechar las oportunidades que surgen en tu camino.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4">Trabajando con los Arcanos</h2>
              <p className="text-purple-200 mb-6">
              Entender cómo los planetas influyen en tu camino te permite actuar con mayor conciencia y sabiduría. Conectar con tu carta natal y los ciclos planetarios te brinda herramientas para: Reconocer tus fortalezas y desafíos, alinear tus acciones con tus verdaderos propósitos y navegar los momentos difíciles con mayor claridad y confianza.
              </p>

              <p className="text-purple-200 mb-6">
Si deseas profundizar en cómo los planetas están influyendo en tu vida en este momento, agenda una lectura de carta astral personalizada conmigo y descubre tu camino vital con la guía de los astros.
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
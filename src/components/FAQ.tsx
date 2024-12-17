import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo funciona una lectura de tarot?",
    answer: "Durante la sesión, utilizo el tarot como herramienta para conectar con tu energía y guiarte en temas específicos de tu vida, como el amor, trabajo, finanzas o crecimiento personal. A través de las cartas, obtendrás claridad, orientación y posibles caminos a seguir."
  },
  {
    question: "¿Qué necesito para una lectura de carta astral?",
    answer: "Necesitaremos tu fecha, hora y lugar exacto de nacimiento para crear tu carta astral personalizada."
  },
  {
    question: "¿Puedo hacer preguntas específicas durante la lectura de tarot?",
    answer: "¡Claro que sí! La sesión está diseñada para resolver tus dudas o preocupaciones puntuales. Puedes traer preguntas sobre situaciones actuales o áreas específicas de tu vida."
  },
  {
    question: "¿Las sesiones son presenciales o virtuales?",
    answer: "Ofrezco ambas modalidades: Virtual, a través de videollamada (Zoom, Google Meet, WhatsApp), y Presencial en Cali, barrio El Ingenio."
  },
  {
    question: "¿Es necesario tener conocimientos previos sobre tarot o astrología?",
    answer: "No, no necesitas ningún conocimiento previo. Yo te guiaré durante toda la sesión, explicando cada paso y cada mensaje que surja."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16">
          Preguntas Frecuentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-purple-500/30 rounded-lg overflow-hidden bg-purple-900/20"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-purple-300 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 text-purple-200 border-t border-purple-500/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
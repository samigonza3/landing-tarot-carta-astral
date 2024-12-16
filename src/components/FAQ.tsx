import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo se realiza una lectura online?",
    answer: "Las lecturas se realizan a través de videollamada. Utilizamos plataformas seguras y de alta calidad para asegurar una experiencia mística inmersiva."
  },
  {
    question: "¿Qué necesito para mi carta astral?",
    answer: "Necesitaremos tu fecha, hora y lugar exacto de nacimiento para crear tu carta astral personalizada."
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer: "Las lecturas de tarot duran 30 minutos, mientras que las sesiones de carta astral se extienden a 45 minutos."
  },
  {
    question: "¿Cómo me preparo para una lectura?",
    answer: "Recomendamos estar en un lugar tranquilo, tener tus preguntas preparadas y mantener una mente abierta."
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
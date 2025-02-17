import React, { useState, FormEvent } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function BirthChart() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
          birth_date: formData.birthDate,
          birth_time: formData.birthTime,
          birth_place: formData.birthPlace
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        birthDate: '',
        birthTime: '',
        birthPlace: ''
      });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-pink-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-cinzel">
              Carta Astral Gratuita
            </h1>
            
            <p className="text-purple-200 mb-8">
              Descubre los secretos que los astros tienen preparados para ti. 
              Completa el formulario y recibirás tu carta astral básica en tu correo electrónico.
            </p>

            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-purple-900/20 p-8 rounded-xl border border-purple-500/30"
            >
              <div>
                <label htmlFor="name" className="block text-purple-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-purple-300 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="birthDate" className="block text-purple-300 mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthDate"
                  required
                  value={formData.birthDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="birthTime" className="block text-purple-300 mb-2">
                  Hora de Nacimiento
                </label>
                <input
                  type="time"
                  id="birthTime"
                  required
                  value={formData.birthTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, birthTime: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="birthPlace" className="block text-purple-300 mb-2">
                  Lugar de Nacimiento
                </label>
                <input
                  type="text"
                  id="birthPlace"
                  required
                  placeholder="Ciudad, País"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData(prev => ({ ...prev, birthPlace: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Recibir Carta Astral
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">
                  ¡Solicitud enviada con éxito! Revisa tu correo electrónico.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-400 text-center">
                  Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

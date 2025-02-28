import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Blog />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
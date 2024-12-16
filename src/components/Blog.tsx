import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "Los Arcanos Mayores",
    excerpt: "Descubre el significado profundo de las cartas más poderosas del Tarot",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be",
    slug: "arcanos-mayores"
  },
  {
    title: "Astrología y Destino",
    excerpt: "Cómo los planetas influyen en nuestro camino vital",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5",
    slug: "astrologia-destino"
  },
  {
    title: "Rituales Lunares",
    excerpt: "Aprovecha el poder de las fases lunares en tu vida",
    image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009",
    slug: "rituales-lunares"
  }
];

export default function Blog() {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16">
          Blog Místico
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-purple-900/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-48 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-2">{post.title}</h3>
                <p className="text-purple-200">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-pink-400 hover:text-pink-300 transition-colors duration-300"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
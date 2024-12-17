import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost1 from './components/BlogPost';
import BlogPost2 from './components/PostAstroDestino';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/arcanos-mayores" element={<BlogPost1 />} />
      <Route path="/blog/astrologia-destino" element={<BlogPost2 />} />
    </Routes>
  );
}

export default App;
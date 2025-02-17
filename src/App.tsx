import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost1 from './components/BlogPost';
import BlogPost2 from './components/PostAstroDestino';
import BirthChart from './components/AstroChart.tsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/arcanos-mayores" element={<BlogPost1 />} />
      <Route path="/blog/astrologia-destino" element={<BlogPost2 />} />
      <Route path="/carta-astral-gratis" element={<BirthChart />} />
    </Routes>
  );
}

export default App;
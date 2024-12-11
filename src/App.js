// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Glowna from './glowna';   // Import strony głównej
import Gk from './galeriak';  // Import galerii kota
import Gp from './galeriap';    // Import galerii psa
import './main.css';           // Import stylów CSS

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/galeriap">Galeria Pies</Link>
          </li>
          <li>
            <Link to="/galeriak">Galeria Kot</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Glowna />} /> {/* Strona główna */}
        <Route path="/galeriak" element={<Gk />} /> {/* Galeria Kot */}
        <Route path="/galeriap" element={<Gp />} /> {/* Galeria Pies */}
      </Routes>
    </>
  );
}

export default App;

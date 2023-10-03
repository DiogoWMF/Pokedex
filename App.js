import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note que estamos importando Routes, não Switch
import Pokedex from './pages/Pokedex_1';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes em vez de Switch */}
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

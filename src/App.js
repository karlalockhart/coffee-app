// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Favorites from './components/Favorites';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [favorites, setFavorites] = useState([]); // 1

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes') /* 2 */
      .then(res => res.json()) /* 3 */
      .then(data => setCoffeeTypes(data))
      //console.log(data)
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []); // 4

  const addCoffee = newCoffee => {
    setCoffeeTypes(prevCoffeeTypes => [...prevCoffeeTypes, newCoffee]);
  };

  const updateFavorites = (id) => {
    // 5
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favoriteId => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  // 6
  return (
    <Router>
      <NavBar /> {/* 7 */}
        <Routes>
          <Route path="/" element={<Home coffeeTypes={coffeeTypes} addCoffee={addCoffee} updateFavorites={updateFavorites} />} />
          <Route path="/add-coffee/*" element={<AddCoffee addCoffee={addCoffee} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} coffeeTypes={coffeeTypes} />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// END
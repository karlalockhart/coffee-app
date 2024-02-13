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
  const [favorites, setFavorites] = useState([]); // New state for favorites

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes') /* fetch is great because it is asynchronous. Returns a promise object w/ 3 status - pending, error, resolved */
      .then(res => res.json()) /* as long as that PO shows pending as its status, ill skip the second .then line and the .catch line and keep going to do other stuff, but if it's resolved, it will fire the first & second .then line - it multi-tasks*/
      .then(data => setCoffeeTypes(data))
      //console.log(data)
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []); //mount this

  const addCoffee = newCoffee => {
    setCoffeeTypes(prevCoffeeTypes => [...prevCoffeeTypes, newCoffee]);
  };

  const updateFavorites = (id) => {
    // Toggle the favorite status in the favorites array
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favoriteId => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <Router>
      <NavBar /> {/* Use NavBar component here */}
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

    

/*
function App() {
  return (
    <div className="App">
      Hey Ya'll!
    </div>
  );
}
*/


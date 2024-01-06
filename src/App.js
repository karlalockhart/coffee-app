// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoffeeForm from './components/CoffeeForm'; // Import CoffeeForm

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes')
      .then(res => res.json())
      .then(data => setCoffeeTypes(data))
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []);

  const addCoffee = newCoffee => {
    setCoffeeTypes(prevCoffeeTypes => [...prevCoffeeTypes, newCoffee]);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Add CoffeeForm component */}
      <CoffeeForm addCoffee={addCoffee} />
    </Router>
  );
};

export default App;



/*
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
*/

/*
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
*/

/*
function App() {
  return (
    <div className="App">
      Hey Ya'll!
    </div>
  );
}
*/


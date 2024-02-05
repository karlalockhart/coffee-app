// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Favorites from './components/Favorites';

import './App.css';

const App = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [favorites, setFavorites] = useState([]); // New state for favorites

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes') /* fetch is great because it is asynchronous. Returns a promise object w/ 3 status - pending, error, resolved */
      .then(res => res.json())
      .then(data => setCoffeeTypes(data))
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []);

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
      <div className="navbar">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu">
          <h2>Carmen's Coffee Corner</h2>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-coffee">Add Coffee</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Home coffeeTypes={coffeeTypes} addCoffee={addCoffee} updateFavorites={updateFavorites} />} />
          <Route path="/add-coffee/*" element={<AddCoffee addCoffee={addCoffee} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} coffeeTypes={coffeeTypes} />} />
        </Routes>
    </Router>
  );
};

export default App;

/*
<Router>
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-coffee/*" component={AddCoffee} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path="/coffeeTypes/:id" component={coffeeType} />
      </Switch>
    </div>
</Router>
*/

/*
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Favorites from './components/Favorites'; // Updated import

import './App.css';

const App = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [favorites, setFavorites] = useState([]); // New state for favorites

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes')
      .then(res => res.json())
      .then(data => setCoffeeTypes(data))
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []);

  const addCoffee = newCoffee => {
    setCoffeeTypes(prevCoffeeTypes => [...prevCoffeeTypes, newCoffee]);
  };

  const updateFavorites = (id) => {
    // Toggle the favorite status in the favorites array
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  return (
    <Router>
      {/* Navigation Bar with Hamburger Menu *//*}
      <div className="navbar">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu">
          <h2>Welcome to Our Coffee Types Page</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-coffee">Add Coffee</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Home coffeeTypes={coffeeTypes} addCoffee={addCoffee} updateFavorites={updateFavorites} />}
        />
        <Route path="/add-coffee/*" element={<AddCoffee addCoffee={addCoffee} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} coffeeTypes={coffeeTypes} />} // Pass favorites as a prop
        />
      </Routes>
    </Router>
  );
};

export default App;
*/

/*
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Favorites from './components/Favorites'; // Updated import

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
      {/* Navigation Bar with Hamburger Menu *//*}
      <div className="navbar">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu">
          <h2>Welcome to Our Coffee Types Page</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-coffee">Add Coffee</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home coffeeTypes={coffeeTypes} addCoffee={addCoffee} />} />
        <Route path="/add-coffee/*" element={<AddCoffee addCoffee={addCoffee} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
*/


/*
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import Contact from './components/Contact';
import CoffeeForm from './components/CoffeeForm'; // Import CoffeeForm

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
      {/* Navigation Bar with Hamburger Menu *//*}
      <div className="navbar">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu">
          <h2>Welcome to Our Coffee Page</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-coffee">Add Coffee</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-coffee/*" element={<AddCoffee addCoffee={addCoffee} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
*/



/*
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CoffeeForm from './components/CoffeeForm'; // Import CoffeeForm

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
      {/* Navigation Bar with Hamburger Menu *//*}
      <div className="navbar">
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu">
          <h2>Welcome to Our Coffee Types Page</h2>
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
        </div>
      </div>

      {/* Add CoffeeForm component *//*}
      <CoffeeForm addCoffee={addCoffee} />

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

      {/* Add CoffeeForm component *//*}
      <CoffeeForm addCoffee={addCoffee} />
    </Router>
  );
};

export default App;
*/


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


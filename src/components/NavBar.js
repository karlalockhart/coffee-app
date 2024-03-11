// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;

// END
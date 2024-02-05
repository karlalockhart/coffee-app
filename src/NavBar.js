import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink /*this is the link that I'm putting on the page; it's called the nav link; 
      it's a part of react router and if I put that link on the page, this part tells me that if this thing is clicked, 
      please go to slass "/", which then hits to "App.js" page > <Route exact path="/" componenet={Home} /> and its like what was that? Where did it go? 
      It's this one - now render home - this (code below) is what renders the button (when clicked) that causes it to go "Home"*/
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/add-coffee"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/favorites"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;
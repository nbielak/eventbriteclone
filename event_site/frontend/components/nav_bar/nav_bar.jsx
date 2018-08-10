import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({currentUser, logout}) => {
  debugger;
  const loggedInNavBar = () => (
    <nav className = "nav-bar">
      <Link className="nav-bar-link" to="/">browse events</Link>
      <Link className="nav-bar-link" to="/">{currentUser.id.first_name}</Link>
      <Link className="nav-bar-link" to="/">create event</Link>
    </nav>
  );

  const loggedOutNavBar = () => (
    <nav className = "nav-bar">
      <Link className="nav-bar-link" to="/">browse events</Link>
      <Link className="nav-bar-link" to="/signin">sign in</Link>
      <Link className="nav-bar-link" to="/">create event</Link>
    </nav>
  );

  return currentUser.id ? loggedInNavBar() : loggedOutNavBar();
};

export default NavBar;

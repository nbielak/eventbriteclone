import React from 'react';
import { Link } from 'react-router-dom';


const navBar = ({currentUser, logout}) => {
  const loggedInNavBar = () => (
    <nav className = "nav-bar">
      <Link className="nav-bar-link" to="/">browse events</Link>
      <Link className="nav-bar-link" to="/signin">{currentUser.first_name}</Link>
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

  return currentUser ? loggedInNavBar() : loggedOutNavBar();
};

export default navBar;

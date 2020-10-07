import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Logout</Link>
      </li>
    </ul>
  </nav>
);

export default Header;

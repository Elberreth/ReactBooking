// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking-list">Booking List</Link>
          </li>
          <li>
            <Link to="/cancel-booking">Cancel Booking</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



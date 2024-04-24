// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking-list">Booking List</Link></li>
          <li><Link to="/booking-form">Book Now</Link></li>
          <li><Link to="/cancel-booking">Cancel Booking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

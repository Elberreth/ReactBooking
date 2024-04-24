import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import BookingList from './components/BookingList';
import CancelBooking from './components/CancelBooking';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/booking-list" component={BookingList} />
        <Route path="/cancel-booking" component={CancelBooking} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;





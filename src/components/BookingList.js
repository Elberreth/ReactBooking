// BookingList.js
import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <div>ID: {booking.id}</div>
            <div>Name: {booking.name}</div>
            <div>Date: {booking.date}</div>
            <div>Time: {booking.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

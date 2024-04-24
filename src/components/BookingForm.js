// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBook = () => {
    // Call API to book
    onBook({ name, date, time });
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleBook}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;

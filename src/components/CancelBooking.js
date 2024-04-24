// CancelBookingForm.js
import React, { useState } from 'react';

const CancelBookingForm = ({ onCancel }) => {
  const [bookingId, setBookingId] = useState('');

  const handleCancel = () => {
    // Call API to cancel booking
    onCancel(bookingId);
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <input type="text" placeholder="Booking ID" value={bookingId} onChange={e => setBookingId(e.target.value)} />
      <button onClick={handleCancel}>Cancel Booking</button>
    </div>
  );
};

export default CancelBookingForm;

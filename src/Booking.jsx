import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

function Booking() {
  const [date, setDate] = useState(new Date());
  const [services, setServices] = useState([
    { id: 1, name: 'Massage', duration: 60, price: 100 },
    { id: 2, name: 'Facial', duration: 90, price: 150 },
  ]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>Duration: {service.duration} minutes</p>
            <p>Price: ${service.price}</p>
            <button>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booking;

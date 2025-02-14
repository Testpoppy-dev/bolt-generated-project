import React from 'react';

function Service({ service }) {
  return (
    <div>
      <h2>{service.name}</h2>
      <p>Duration: {service.duration} minutes</p>
      <p>Price: ${service.price}</p>
      <button>Book Now</button>
    </div>
  );
}

export default Service;

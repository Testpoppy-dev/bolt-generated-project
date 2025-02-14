import React, { useState, useEffect } from 'react';

function Account() {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  return (
    <div>
      <h1>Account</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default Account;

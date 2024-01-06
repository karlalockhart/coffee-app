// CoffeeForm.js
import React, { useState } from 'react';

const CoffeeForm = ({ addCoffee }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/coffeeTypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error('Failed to add coffee type');
      }

      const data = await response.json();
      addCoffee(data); // Update state with the new coffee type
      setTitle(''); // Clear the form
    } catch (error) {
      console.error('Error adding coffee type:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter coffee type"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add Coffee Type</button>
    </form>
  );
};

export default CoffeeForm;

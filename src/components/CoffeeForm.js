// CoffeeForm.js
import React, { useState } from 'react';

const CoffeeForm = ({ addCoffee }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/coffeeTypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, image, ingredients }),
      });

      if (!response.ok) {
        throw new Error('Failed to add coffee type');
      }

      const data = await response.json();
      addCoffee(data); // Update state with the new coffee type
      // Clear the form
      setName('');
      setDescription('');
      setImage('');
      setIngredients('');
    } catch (error) {
      console.error('Error adding coffee type:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coffee Name:
        <input
          type="text"
          placeholder="Enter coffee name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Coffee Description:
        <input
          type="text"
          placeholder="Enter coffee description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <label>
        Ingredients:
        <input
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </label>
      <button type="submit">Add Favorite Coffee Drink</button>
    </form>
  );
};

export default CoffeeForm;


/*
// CoffeeForm.js
import React, { useState } from 'react';

const CoffeeForm = ({ addCoffee }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/coffeeTypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, image }),
      });

      if (!response.ok) {
        throw new Error('Failed to add coffee type');
      }

      const data = await response.json();
      addCoffee(data); // Update state with the new coffee type
      // Clear the form
      setName('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error adding coffee type:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coffee Name:
        <input
          type="text"
          placeholder="Enter coffee name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Coffee Description:
        <input
          type="text"
          placeholder="Enter coffee description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </label>
      <button type="submit">Add Coffee Type</button>
    </form>
  );
};

export default CoffeeForm;
*/


/*
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
*/

// CoffeeForm.js
import React, { useState } from 'react';

// 1
const CoffeeForm = ({ addCoffee }) => { /* 2 */
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async e => {
    e.preventDefault(); // 3

    try {
      const response = await fetch('http://localhost:3000/coffeeTypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          image: image || getDefaultImageURL(name),
          ingredients: ingredients.split('\n').map(ingredient => ingredient.trim()), // 4
          likes: 0, // 5
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add coffee type');
      }

      const data = await response.json();
      addCoffee(data); // 6
      // 7
      setName(''); // 8
      setDescription(''); // 8
      setImage(''); // 8
      setIngredients(''); // 8
    } catch (error) {
      console.error('Error adding coffee type:', error);
    }
  };

// 9
const getDefaultImageURL = (coffeeName) => { // 10
  const formattedName = coffeeName.replace(/\s+/g, '-').toLowerCase(); // 11
 
  return `https://via.placeholder.com/300?text=${formattedName}`;
};

// 12
// 13
// 14
// 15
// 16

  return (
    <form onSubmit={handleSubmit}>
      <hr/>
      <br/>
      <label>
        Coffee Name:
        <input
          type="text"
          placeholder="Enter coffee name"
          value={name}
          onChange={e => setName(e.target.value)} // 17
        />
        <br/>
      </label>
      <label>
        Coffee Description:
        <textarea
          type="text"
          placeholder="Enter coffee description"
          value={description}
          onChange={e => setDescription(e.target.value)} // 18
        />
        <br/>
      </label>
      <label>
        Coffee Ingredients:
        <textarea
          placeholder="Enter coffee ingredients (one per line)"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)} // 19
        />
        <br/>
        {ingredients && (
          <ul>
            {ingredients.split('\n').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </label>
      <label>
        Coffee Image URL:
        <input
          type="text"
          placeholder="Enter coffee image URL"
          value={image}
          onChange={e => setImage(e.target.value)} // 20
        />
        <br/>
      </label>
      <br/>
      {image ? (
        <img src={image} alt="Coffee" className="coffee-image" />
      ) : (
        <div className="coffee-placeholder">No Image</div>
      )}
      <br/>
      <button type="submit">Add Favorite Coffee Drink</button>
    </form>
  );
};

export default CoffeeForm;

// END
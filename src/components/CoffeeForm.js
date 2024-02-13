// CoffeeForm.js
import React, { useState } from 'react';

const CoffeeForm = ({ addCoffee }) => { /* each card will have name, description, image, and ingredients.*/
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async e => {
    e.preventDefault(); //what is that it prevents? posting - suppressing the default action of a form from posting

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
          ingredients: ingredients.split('\n').map(ingredient => ingredient.trim()), // Split and trim ingredients
          likes: 0, // Initial likes set to 0 for a new coffee drink
        }),
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

//consistent image size default | image placeholder
const getDefaultImageURL = (coffeeName) => {
  // Replace spaces with hyphens and convert to lowercase
  const formattedName = coffeeName.replace(/\s+/g, '-').toLowerCase();
  // Return a default image URL based on the formatted coffee name
  return `https://via.placeholder.com/300?text=${formattedName}`;
};


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
          onChange={e => setName(e.target.value)} //e.target.value will change the "name" to whatever value
        />
        <br/>
      </label>
      <label>
        Coffee Description:
        <textarea
          type="text"
          placeholder="Enter coffee description"
          value={description}
          onChange={e => setDescription(e.target.value)} //e.target.value will change the "description" to whatever value
        />
        <br/>
      </label>
      <label>
        Coffee Ingredients:
        <textarea
          placeholder="Enter coffee ingredients (one per line)"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)} //e.target.value will change the "ingredients" to whatever value
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
          onChange={e => setImage(e.target.value)} //e.target.value will change the "image" to whatever value
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
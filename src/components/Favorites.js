import React from 'react';

const Favorites = ({ favorites, coffeeTypes }) => {
  // Ensure coffeeTypes is defined before filtering
  const favoriteCoffeeTypes = coffeeTypes.filter(coffee => favorites.includes(coffee.id));

  return (
    <div>
      <h3>My Favorite Coffee Drinks!</h3>
      <div className="coffee-types-container">
        {favoriteCoffeeTypes.map(coffee => (
          <div key={coffee.id} className="coffee-type">
            <img src={coffee.image} alt={coffee.name} />
            <div className="coffee-type-info">
              <h3>{coffee.name}</h3>
              {coffee.description && <p>{coffee.description}</p>}
              <p>Likes: {coffee.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;



/*
// Favorites.js
import React from 'react';

const Favorites = ({ favorites, coffeeTypes }) => {
  const favoriteCoffeeTypes = coffeeTypes.filter(coffee => favorites.includes(coffee.id));

  return (
    <div>
      <h2>Favorites Page</h2>
      {/* Favorites page content *//*}
      <div className="coffee-types-container">
        {favoriteCoffeeTypes.map(coffee => (
          <div key={coffee.id} className="coffee-type">
            <img src={coffee.image} alt={coffee.name} />
            <div className="coffee-type-info">
              <h3>{coffee.name}</h3>
              {coffee.description && <p>{coffee.description}</p>}
              <p>Likes: {coffee.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
*/




/*
// Favorites.js
import React from 'react';

const Favorites = () => {
  return (
    <div>
      <h2>Favorites Page</h2>
      {/* Favorites page content *//*}
    </div>
  );
};

export default Favorites;
*/
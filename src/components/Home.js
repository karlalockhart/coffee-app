// Home.js
import React, { useState, useEffect } from 'react';

// 1
const Home = ({ addCoffee, coffeeTypes, updateFavorites }) => {
  const [localCoffeeTypes, setLocalCoffeeTypes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortByLikes, setSortByLikes] = useState(false);

  useEffect(() => {
    setLocalCoffeeTypes(coffeeTypes);
  }, [coffeeTypes]);


  // 2
  const handleLike = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/coffeeTypes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: localCoffeeTypes.find(coffee => coffee.id === id).likes + 1 }),
      });

      if (response.ok) {
        // 3
        setLocalCoffeeTypes(prevCoffeeTypes =>
          prevCoffeeTypes.map(coffee =>
            coffee.id === id ? { ...coffee, likes: coffee.likes + 1 } : coffee
          )
        );
      } else {
        console.error('Failed to update like count');
      }
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };

  // 4
  const handleDetailsToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, showDetails: !coffee.showDetails } : coffee
      )
    );
  };

  // 5
  const handleFavoriteToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, isFavorite: !coffee.isFavorite } : coffee
      )
    );

    updateFavorites(id); // 6
  };


  // 7
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  // 8
  const handleSortByLikes = () => {
    setSortByLikes(!sortByLikes);
  };

  // 9
  useEffect(() => {
    // 10
    let filteredCoffeeTypes = coffeeTypes.filter(coffee => // 11
      Array.isArray(coffee.ingredients) ? coffee.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchInput.toLowerCase())
      ) : coffee.ingredients.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    if (sortByLikes) {
      filteredCoffeeTypes = filteredCoffeeTypes.sort((a, b) => b.likes - a.likes);
    }
  
    setLocalCoffeeTypes(filteredCoffeeTypes);
  }, [coffeeTypes, searchInput, sortByLikes]);


  return (
    <div className="coffee-types-container">
      
      {/* Search Bar */}
      {/* 12 */}
        <div className="search-bar">
          
        <input
          type="text"
          placeholder="Search by ingredients"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSortByLikes}>
          {sortByLikes ? 'Sort by Newest' : 'Sort by Likes'}
        </button>
      </div>

      {/* Coffee Cards */}
      {localCoffeeTypes.map(coffee => (
        <div key={coffee.id} className="coffee-type">
          {/* 13 */}


          <img src={coffee.image} alt={coffee.name} />
          <div className="coffee-type-info">
            <h3>{coffee.name}</h3>
            {coffee.description && <p>{coffee.description}</p>}
            <p>Likes: {coffee.likes}</p>

            {/* 14 */}
            <button onClick={() => handleDetailsToggle(coffee.id)}>
              {coffee.showDetails ? 'Hide Details' : 'Details'}
            </button>

            {/* 15 */}
            {coffee.showDetails && (
              <div className="details-container">
                <p>Ingredients:</p> 
                <ul>
                  {Array.isArray(coffee.ingredients) ? coffee.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  )) : <li>{coffee.ingredients}</li>}
                </ul>
              </div>
            )}

            {/* 16 */}
            <button
              onClick={() => handleFavoriteToggle(coffee.id)}
              style={{ color: coffee.isFavorite ? 'yellow' : 'white' }}
            >
              &#9733; {/* 17 */}
            </button>

            <button onClick={() => handleLike(coffee.id)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

// END
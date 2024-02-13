/*
// Home.js
import React, { useState, useEffect } from 'react';

const Home = ({ addCoffee, coffeeTypes, updateFavorites }) => {
  const [localCoffeeTypes, setLocalCoffeeTypes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortByLikes, setSortByLikes] = useState(false);

  useEffect(() => {
    setLocalCoffeeTypes(coffeeTypes);
  }, [coffeeTypes]);

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
        // Update the like count in the local state
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

  const handleDetailsToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, showDetails: !coffee.showDetails } : coffee
      )
    );
  };

  const handleFavoriteToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, isFavorite: !coffee.isFavorite } : coffee
      )
    );

    updateFavorites(id); // Update favorites in the parent component
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortByLikes = () => {
    setSortByLikes(!sortByLikes);
  };

  useEffect(() => {
    // Filter and sort the coffee types based on search input and likes
    let filteredCoffeeTypes = coffeeTypes.filter((coffee) =>
      coffee.ingredients.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (sortByLikes) {
      filteredCoffeeTypes = filteredCoffeeTypes.sort((a, b) => b.likes - a.likes);
    }

    setLocalCoffeeTypes(filteredCoffeeTypes);
  }, [coffeeTypes, searchInput, sortByLikes]);

  return (
    <div className="coffee-types-container">
      {/* Search Bar *//*}
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

      {/* Coffee Cards *//*}
      {localCoffeeTypes.map((coffee) => (
        <div key={coffee.id} className="coffee-type">
          {/* ... (your existing card JSX) *//*}
        </div>
      ))}
    </div>
  );
};

export default Home;
*/


// Home.js

import React, { useState, useEffect } from 'react';

const Home = ({ addCoffee, coffeeTypes, updateFavorites }) => {
  const [localCoffeeTypes, setLocalCoffeeTypes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortByLikes, setSortByLikes] = useState(false);

  useEffect(() => {
    setLocalCoffeeTypes(coffeeTypes);
  }, [coffeeTypes]);

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
        // Update the like count in the local state
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

  const handleDetailsToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, showDetails: !coffee.showDetails } : coffee
      )
    );
  };

  const handleFavoriteToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, isFavorite: !coffee.isFavorite } : coffee
      )
    );

    updateFavorites(id); // Update favorites in the parent component
  };




  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortByLikes = () => {
    setSortByLikes(!sortByLikes);
  };

  useEffect(() => {
    // Filter and sort the coffee types based on search input and likes
    let filteredCoffeeTypes = coffeeTypes.filter(coffee =>
      Array.isArray(coffee.ingredients) ? coffee.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchInput.toLowerCase())
      ) : coffee.ingredients.toLowerCase().includes(searchInput.toLowerCase())
    );
    /*let filteredCoffeeTypes = coffeeTypes.filter(coffee =>
      coffee.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchInput.toLowerCase())
      )
    ); */
  
    if (sortByLikes) {
      filteredCoffeeTypes = filteredCoffeeTypes.sort((a, b) => b.likes - a.likes);
    }
  
    setLocalCoffeeTypes(filteredCoffeeTypes);
  }, [coffeeTypes, searchInput, sortByLikes]);


  /*
  useEffect(() => {
    // Filter and sort the coffee types based on search input and likes
    let filteredCoffeeTypes = coffeeTypes.filter((coffee) =>
      coffee.ingredients.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (sortByLikes) {
      filteredCoffeeTypes = filteredCoffeeTypes.sort((a, b) => b.likes - a.likes);
    }

    setLocalCoffeeTypes(filteredCoffeeTypes);
  }, [coffeeTypes, searchInput, sortByLikes]);

*/


  return (
    <div className="coffee-types-container">
      
      {/* Search Bar */}
      {/*<div className="search-bar-container"></div>*/}
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
          {/* ... (your existing card JSX) */}


          <img src={coffee.image} alt={coffee.name} />
          <div className="coffee-type-info">
            <h3>{coffee.name}</h3>
            {coffee.description && <p>{coffee.description}</p>}
            <p>Likes: {coffee.likes}</p>

            {/* Button to toggle details visibility */}
            <button onClick={() => handleDetailsToggle(coffee.id)}>
              {coffee.showDetails ? 'Hide Details' : 'Details'}
            </button>

            {/* Details content */}
            {coffee.showDetails && (
              <div className="details-container">
                <p>Ingredients:</p> 
                <ul>
                  {Array.isArray(coffee.ingredients) ? coffee.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  )) : <li>{coffee.ingredients}</li>}
                </ul>

                {/*<ul>
                {coffee.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
                </ul>*/}
                  
                {/* Add other details here as needed */}
              </div>
            )}

            {/* Button to toggle favorite status */}
            <button
              onClick={() => handleFavoriteToggle(coffee.id)}
              style={{ color: coffee.isFavorite ? 'yellow' : 'white' }}
            >
              &#9733; {/* Unicode character for star */}
            </button>

            <button onClick={() => handleLike(coffee.id)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;





/*
// Home.js
import React, { useState, useEffect } from 'react';

const Home = ({ addCoffee, coffeeTypes }) => {
  const [localCoffeeTypes, setLocalCoffeeTypes] = useState([]);

  useEffect(() => {
    setLocalCoffeeTypes(coffeeTypes);
  }, [coffeeTypes]);

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
        // Update the like count in the local state
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

  const handleDetailsToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, showDetails: !coffee.showDetails } : coffee
      )
    );
  };

  const handleFavoriteToggle = (id) => {
    setLocalCoffeeTypes(prevCoffeeTypes =>
      prevCoffeeTypes.map(coffee =>
        coffee.id === id ? { ...coffee, isFavorite: !coffee.isFavorite } : coffee
      )
    );
  };


  return (
    <div className="coffee-types-container">
      {localCoffeeTypes.map(coffee => (
        <div key={coffee.id} className="coffee-type">
          <img src={coffee.image} alt={coffee.name} />
          <div className="coffee-type-info">
            <h3>{coffee.name}</h3>
            {coffee.description && <p>{coffee.description}</p>}
            <p>Likes: {coffee.likes}</p>

            {/* Button to toggle details visibility *//*}
            <button onClick={() => handleDetailsToggle(coffee.id)}>
              {coffee.showDetails ? 'Hide Details' : 'Details'}
            </button>

            {/* Details content *//*}
            {coffee.showDetails && (
              <div className="details-container">
                <p>Ingredients: {coffee.ingredients}</p>
                {/* Add other details here as needed *//*}
              </div>
            )}

            {/* Button to toggle favorite status *//*}
            <button
              onClick={() => handleFavoriteToggle(coffee.id)}
              style={{ color: coffee.isFavorite ? 'yellow' : 'white' }}
            >
              &#9733; {/* Unicode character for star *//*}
            </button>

            <button onClick={() => handleLike(coffee.id)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
*/


/*
// Home.js
import React, { useState, useEffect } from 'react';


const Home = ({ addCoffee, coffeeTypes }) => {
  const [localCoffeeTypes, setLocalCoffeeTypes] = useState([]);

  useEffect(() => {
    setLocalCoffeeTypes(coffeeTypes);
  }, [coffeeTypes]);

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
        // Update the like count in the local state
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

  return (
    <div className="coffee-types-container">

      {localCoffeeTypes.map(coffee => (
        <div key={coffee.id} className="coffee-type">
          <img src={coffee.image} alt={coffee.name} />
          <div className="coffee-type-info">
            <h3>{coffee.name}</h3>
            {coffee.description && <p>{coffee.description}</p>}
            <p>Likes: {coffee.likes}</p>
            <button onClick={() => handleLike(coffee.id)}>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
*/


/*
// Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [coffeeTypes, setCoffeeTypes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/coffeeTypes') // Assuming JSON Server is running on port 3001
      .then(response => response.json())
      .then(data => setCoffeeTypes(data))
      .catch(error => console.error('Error fetching coffee types:', error));
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/coffeeTypes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: coffeeTypes.find(coffee => coffee.id === id).likes + 1 }),
      });

      if (response.ok) {
        // Update the like count in the local state
        setCoffeeTypes(prevCoffeeTypes =>
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

  return (
    <div className="coffee-types-container">
      {/*<h2>Welcome to Our Coffee Types Page</h2>*//*}
      {coffeeTypes.map(coffee => (
        <div key={coffee.id} className="coffee-type">
        <img src={coffee.image} alt={coffee.name} />
        <div className="coffee-type-info">
          <h3>{coffee.name}</h3>
          {/* Ensure coffee.description exists before rendering *//*}
          {coffee.description && <p>{coffee.description}</p>}
          {/* <p>{coffee.description}</p> *//*}
          <p>Likes: {coffee.likes}</p>
          <button onClick={() => handleLike(coffee.id)}>Like</button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Home;
*/

/*
  const handleLike = (id) => {
    // Implement your logic to handle liking a coffee type
    console.log(`Liked coffee type with ID: ${id}`);
  };
*/


/*
return (
  <div>
    <h2>Welcome to Our Coffee Types Page</h2>
    {coffeeTypes.map(coffee => (
      <div key={coffee.id}>
        <h3>{coffee.name || coffee.title}</h3>
        <img src={coffee.image} alt={coffee.name || coffee.title} />
        <p>{coffee.description || ''}</p>
        <p>Likes: {coffee.likes || 0}</p>
      </div>
    ))}
  </div>
);
};
*/


/*
import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>  
      {/* Home page content *//*}/*
    </div>
  );
};

export default Home;
*/
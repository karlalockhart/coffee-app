// AddCoffee.js
import React from 'react';
import CoffeeForm from './CoffeeForm'; // Import CoffeeForm

const AddCoffee = ({ addCoffee }) => {
  return (
    <div>
      <h3>Have fun and add your favorite coffee drinks!</h3>
      {/* Add Coffee Types content */}
      <CoffeeForm addCoffee={addCoffee} />
      {/*<p>Have fun and add your favorite coffee drinks!</p>*/}
    </div>
  );
};

export default AddCoffee;



/*
// About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      {/* About page content *//*}
    </div>
  );
};

export default About;
*/

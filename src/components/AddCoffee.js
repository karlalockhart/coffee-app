// AddCoffee.js
import React from 'react';
import CoffeeForm from './CoffeeForm';

const AddCoffee = ({ addCoffee }) => {
  return (
    <div>
      <h3>Have fun and add your favorite coffee drinks!</h3>
      {/* 1 */}
      <CoffeeForm addCoffee={addCoffee} />
      {/*<p>Have fun and add your favorite coffee drinks!</p>*/}
    </div>
  );
};

export default AddCoffee;

// END
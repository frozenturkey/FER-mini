import React, { useState } from 'react';

const Store = (props) => {
  const { number, onNumberChange } = props;

  const [itemName, setItemName] = useState('rose');

  const handleClick = () => {
    onNumberChange();
  };

  return (
    <div>
      <h1>Item name: {itemName}</h1>
      <h2>Number of roses in stock: {number}</h2>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Store;

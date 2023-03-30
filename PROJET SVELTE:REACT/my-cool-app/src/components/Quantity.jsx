import React from "react";

function Quantity({ tempQuantity, onUpdate }) {
  const increment = () => {
    onUpdate(tempQuantity + 1);
  };

  const decrement = () => {
    if (tempQuantity > 0) {
      onUpdate(tempQuantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{tempQuantity}</span>
      <button onClick={increment}>+</button>
    </div>
 
 );
}

export default Quantity;
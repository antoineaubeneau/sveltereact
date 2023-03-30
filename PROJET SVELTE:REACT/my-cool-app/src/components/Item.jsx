import React, { useState } from "react";
import Quantity from "./Quantity";

function Item({ game, onUpdate, onRemove }) {
  const [tempQuantity, setTempQuantity] = useState(0);

  const updateQuantity = (newQuantity) => {
    setTempQuantity(newQuantity);
  };

  const addToBasket = () => {
    onUpdate(game.id, tempQuantity);
    setTempQuantity(0);
  };

  const removeGame = () => {
    if (onRemove) {
      onRemove(game.id);
    }
  };

  return (
    <div className="item">
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.price}€</p>
      <div>
        <Quantity tempQuantity={tempQuantity} onUpdate={updateQuantity} />
      </div>
      <button className="button" onClick={addToBasket}>
        Ajouter au Panier
      </button>
      {onRemove && (
        <button className="button" onClick={removeGame}>
          Supprimer le jeu
        </button>
      )}
    </div>
  );
}

export default Item;

import React from "react";
import Item from "./Item";

function Basket({ basket, onUpdate, onClear }) {
  const clearBasket = () => {
    onClear();
  };

  const checkout = () => {
    console.log("Paiement Effectué");
    clearBasket();
  };
  const vider = () => {
    console.log("Votre panier est vide");
    clearBasket();
  };

  const removeGame = (id) => {
    onUpdate(id, 0);
  };

  const totalItems = basket.reduce((total, game) => total + game.quantity, 0);
  const totalPrice = basket
    .reduce((total, game) => total + game.price * game.quantity, 0)
    .toFixed(2);

  return (
    <div className="basket">
      <h2>
        Votre Panier : ({totalItems}) Jeux : - {totalPrice}€
      </h2>
      {basket.map((game) => (
        <Item key={game.id} game={game} onUpdate={onUpdate} onRemove={removeGame} />
      ))}

      <p>Total : {totalPrice}€</p>
      <button className="button" onClick={checkout}>
        Valider le panier
      </button>
      <button className="button" onClick={vider}>
        Vider le panier
      </button>
    </div>
  );
}

export default Basket;


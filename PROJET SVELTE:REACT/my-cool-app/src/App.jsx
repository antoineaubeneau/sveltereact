import React, { useState } from "react";
import games from "./data/data";
import Item from "./components/Item";
import Basket from "./components/Basket";

function App() {
  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const addToBasket = (id, newQuantity) => {
    const gameIndex = basket.findIndex((game) => game.id === id);
    if (gameIndex === -1 && newQuantity > 0) {
      const game = games.find((game) => game.id === id);
      setBasket([...basket, { ...game, quantity: newQuantity }]);
    } else if (newQuantity > 0) {
      const newBasket = [...basket];
      newBasket[gameIndex] = { ...basket[gameIndex], quantity: newQuantity };
      setBasket(newBasket);
    } else {
      setBasket(basket.filter((game) => game.id !== id));
    }
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  const totalItems = basket.reduce((total, game) => total + game.quantity, 0);
  const totalPrice = basket
    .reduce((total, game) => total + game.price * game.quantity, 0)
    .toFixed(2);

  return (
    <main>
      <button className="button" onClick={toggleBasket}>
        Voir le Panier ({totalItems}) - {totalPrice}€
      </button>
      {showBasket ? (
        <>
          <Basket
            basket={basket}
            onUpdate={addToBasket}
            onClear={clearBasket}
          />
          <button className="button" onClick={toggleBasket}>
            Retour aux jeux vidéo
          </button>
        </>
      ) : (
        <div className="game-list">
          {games.map((game) => (
            <Item key={game.id} game={game} onUpdate={addToBasket} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;

<script>
  import { onMount } from "svelte";
  import games from "./data.js";
  import Item from "./lib/Item.svelte";
  import Basket from "./lib/Basket.svelte";

  let basket = [];
  let showBasket = false;
  let totalItems = 0;
  let totalPrice = 0;

  function addToBasket(id, newQuantity) {
    const gameIndex = basket.findIndex((game) => game.id === id);
    if (gameIndex === -1 && newQuantity > 0) {
      const game = games.find((game) => game.id === id);
      basket = [...basket, { ...game, quantity: newQuantity }];
    } else if (newQuantity > 0) {
      basket[gameIndex] = { ...basket[gameIndex], quantity: newQuantity };
      basket = [...basket];
    } else {
      basket = basket.filter((game) => game.id !== id);
    }
  }
  function clearBasket() {
    basket = [];
    updateTotal();
  }

  function updateTotal() {
    totalItems = basket.reduce((total, game) => total + game.quantity, 0);
    totalPrice = basket
      .reduce((total, game) => total + game.price * game.quantity, 0)
      .toFixed(2);
  }

  function toggleBasket() {
    showBasket = !showBasket;
  }
</script>

<main>
  <button class="button" on:click={toggleBasket}
    >Voir le Panier ({basket.reduce((total, game) => total + game.quantity, 0)})
    - {basket
      .reduce((total, game) => total + game.price * game.quantity, 0)
      .toFixed(2)}€</button
  >
  {#if showBasket}
    <Basket {basket} onUpdate={addToBasket} onClear={clearBasket} />
    <button class="button" on:click={toggleBasket}>Retour aux jeux vidéo</button
    >
  {:else}
    <div class="game-list">
      {#each games as game}
        <Item {game} onUpdate={addToBasket} />
      {/each}
    </div>
  {/if}
</main>

<style>
  .button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #4caf50;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #3e8e41;
  }

  .game-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .header button:hover {
    opacity: 0.8;
  }

  .items-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
</style>

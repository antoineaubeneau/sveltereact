<script>
  export let game;
  export let quantity = 0;
  export let onUpdate = (id, newQuantity) => {};
  export let inBasket = false;

  import Quantity from "./Quantity.svelte";
  import { createEventDispatcher } from "svelte";

  let tempQuantity = quantity;

  const dispatch = createEventDispatcher();

  const updateQuantity = (newQuantity) => {
    tempQuantity = newQuantity;
  };

  const addToBasket = () => {
    onUpdate(game.id, tempQuantity);
    tempQuantity = 0;
  };

  const removeGame = () => {
    dispatch("remove", game.id);
  };
</script>

<div class="item">
  <img src={game.image} alt={game.title} />
  <h2>{game.title}</h2>
  <p>{game.price}€</p>
  <div>
    <Quantity {tempQuantity} onUpdate={updateQuantity} />
  </div>
  <button class="button" on:click={addToBasket}>Ajouter au Panier</button>
  {#if inBasket}
    <button class="button" on:click={removeGame}>Supprimer le jeu</button>
  {/if}
</div>

<style>
  .button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
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

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 1rem;
  }

  .item img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
  }

  .item-info h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .item-info span {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  .item-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .item-actions button {
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .item-actions button:hover {
    background-color: #0056b3;
  }
</style>

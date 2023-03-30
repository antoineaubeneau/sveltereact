<script>
  import Item from "./Item.svelte";
  export let basket = [];
  export let onUpdate;
  export let onCheckout = () => {};
  export let onClear;

  function clearBasket() {
    basket.length = 0;
    onClear();
  }

  function checkout() {
    console.log("Paiement Effectué");
    onCheckout();
  }

  function vider() {
    console.log("Votre panier est vide");
    onCheckout();
  }

  const removeGame = (id) => {
    onUpdate(id, 0);
  };
</script>

<div class="basket">
  <h2>
    Votre Panier : ({basket.reduce((total, game) => total + game.quantity, 0)})
    jeux : - {basket
      .reduce((total, game) => total + game.price * game.quantity, 0)
      .toFixed(2)}€
  </h2>
  {#each basket as game}
    <Item
      {game}
      {onUpdate}
      on:remove={(e) => removeGame(e.detail)}
      inBasket={true}
    />
  {/each}

  <p>
    Total : {basket
      .reduce((total, game) => total + game.price * game.quantity, 0)
      .toFixed(2)}€
  </p>
  <button class="button" on:click={checkout} on:click={clearBasket}
    >Valider le panier</button
  >
  <button class="button" on:click={clearBasket} on:click={vider}
    >Vider le panier</button
  >
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

  .basket {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    width: 80%;
    margin: 1rem auto;
  }

  .basket h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .basket-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  .basket-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .basket-summary span {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
  }

  .basket-summary button {
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .basket-summary button:hover {
    background-color: #0056b3;
  }
</style>

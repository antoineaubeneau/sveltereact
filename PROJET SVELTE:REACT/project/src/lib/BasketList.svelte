<script>
  export let items;
  export let removeFromBasket;
  export let validateBasket;
</script>

<div>
  <button on:click={() => window.location.reload()}>Close</button>
  <h2>Basket</h2>
  {#each items as item}
    <div>
      <p>{item.title} - ${item.price.toFixed(2)} - Quantity: {item.quantity}</p>
      <div>
        <button on:click={() => removeFromBasket(item.id)}>Remove</button>
      </div>
    </div>
  {/each}
  {items.length} ? (
  <div>
    <p>
      Total: ${items
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}
    </p>
    <button on:click={validateBasket}>Validate basket</button>
  </div>
  ) : (
  <div>
    <p>Your basket is empty.</p>
  </div>
  )
</div>

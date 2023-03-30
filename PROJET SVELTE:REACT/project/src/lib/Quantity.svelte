<script>
  export let tempQuantity;
  export let onUpdate;

  const increment = () => {
    onUpdate(tempQuantity + 1);
  };

  const decrement = () => {
    if (tempQuantity > 0) {
      onUpdate(tempQuantity - 1);
    }
  };
</script>

<div>
  <button on:click={decrement}>-</button>
  <span>{tempQuantity}</span>
  <button on:click={increment}>+</button>
</div>

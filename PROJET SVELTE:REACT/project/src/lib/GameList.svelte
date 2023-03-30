<script>
  import Item from "./Item.svelte";
  import { addToBasket } from "../store/basketStore.js";
  export let games = [];
</script>

<div class="games-list">
  {#each games as game (game.id)}
    <Item {game} on:addToBasket={(e) => addToBasket(e.detail)} />
  {/each}
</div>

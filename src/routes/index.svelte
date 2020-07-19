<script>
  import { onMount } from "svelte";
  import Button from "../components/atom/Button.svelte";
  import Card from "../components/organism/Card.svelte";
  import { getPokemons } from "../api/api.js";
  import { pokemons } from "../store/pokemon.js";

  let pokemonsLocal;

  const unsubscribe = pokemons.subscribe((data) => {
    pokemonsLocal = data;
  });

  onMount(() => {
    getPokemons();
  });
</script>

<style>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
  }
  .pokecards {
    flex: 1;
    padding: 32px 56px;
    display: grid;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    overflow-y: scroll;
  }
  .footer {
    display: flex;
    flex-direction: row; /* Default property*/
    justify-content: flex-end;

    /* Position */
    position: fixed;
    bottom: 48px;
    right: 48px;
  }
</style>

<svelte:head>
  <title>P0kemon REST API</title>
</svelte:head>

<div class="container">
  <div class="form">
    <input type="text" />
  </div>
  <div class="pokecards">
    {#each pokemonsLocal as pokemon}
      <Card data={pokemon} />
    {/each}
  </div>
  <div class="footer">
    <Button text={'💟'} size={'large'} style={'circle'} />
  </div>
</div>

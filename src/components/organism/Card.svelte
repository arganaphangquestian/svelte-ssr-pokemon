<script>
  import Button from "../atom/Button.svelte";
  export let data = {};

  const onFavouriteClick = (x) => {
    alert(x.name);
  };
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    max-height: 240px;
    padding: 32px 24px 24px;
    border-radius: 8px;
    box-shadow: 3px 3px 24px 2px rgba(0, 0, 0, 0.05);
    position: relative;
    transition: box-shadow 0.25s ease-in;
  }
  .card:hover {
    box-shadow: 3px 3px 24px 2px rgba(0, 0, 0, 0.15);
  }
  .card-top {
    display: flex;
  }
  .card-top img {
    border: 4px solid rgba(150, 150, 150, 0.5);
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 50%;
  }
  .card-top-header {
    margin-left: 24px;
    padding: 16px 0;
  }
  .card-top-header h3 {
    margin: 0 0 16px;
  }
  .card-top-header span {
    padding: 4px 10px;
    margin-right: 8px;
    border-radius: 48px;
    font-size: 0.65em;
    background-color: rgba(100, 100, 100, 0.3);
  }
  .card-top-header span:last-child {
    margin-right: 0;
  }
  .card-bottom {
    display: block;
    margin-top: 24px;
  }
  .card-bottom ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .card-bottom ul li {
    border-left: 8px solid yellow;
    padding-left: 8px;
    margin-bottom: 8px;
  }
  .card-favourite {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
</style>

<!-- Markup -->
<div class="card" on:click={onFavouriteClick(data)}>
  <div class="card-top">
    <img src={data.sprites.front_default} alt="Ditto" />
    <div class="card-top-header">
      <h3>{data.name}</h3>
      <div class="tags">
        <span>{data.weight}</span>
        <span>{data.height}</span>
        <span>{data.types[0].type.name}</span>
      </div>
    </div>
  </div>
  <div class="card-bottom">
    <ul>
      {#each data.abilities as ability}
        <li>{ability.ability.name}</li>
      {/each}
    </ul>
  </div>
  <div class="card-favourite">
    <Button text={'💛'} />
  </div>
</div>

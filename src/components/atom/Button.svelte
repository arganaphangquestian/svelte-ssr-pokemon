<script>
  export let text = "Button";
  export let size = "medium";
  export let style = "box";
</script>

<style>
  button {
    margin: 0;
  }
  button:hover {
    cursor: pointer;
  }
  button.small {
    font-size: small;
  }
  button.medium {
    font-size: medium;
  }
  button.large {
    font-size: 1.5em;
  }
  button.circle {
    border-radius: 120px;
    padding: 16px;
  }
</style>

<!-- Markup -->
<button class={size + ' ' + style}>{text}</button>

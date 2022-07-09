<template>
  <button @click.prevent="watchMovie()">ASSISTIR</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  setup() {
    function watchMovie() {}
    return {
      watchMovie,
    };
  },
};
</script>

<style></style>

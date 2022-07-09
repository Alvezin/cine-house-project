<template>
  <button @click.prevent="watchmovie()">ASSISTIR</button>
</template>

<script>
import { useStore } from "vuex";
import redirectTo from "@/func/RedirectTo";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "ButtonComponent",
  setup() {
    const store = useStore();
    const state = reactive({
      imdbId: computed(() => store.state.movieDetails.imdbId),
    });
    function watchmovie() {
      redirectTo(`https://embed.warezcdn.com/filme/${state.imdbId}`);
    }
    return {
      watchmovie,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
button {
  @include redirectBtn();
}
</style>

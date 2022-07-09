<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "MovieDetails",
  setup() {
    const store = useStore();
    const route = useRoute();
    onMounted(async () => {
      await store.dispatch("getMovieData", route.params.movieId);
      await store.dispatch("getCast");
      await store.dispatch("getTrailerData", route.params.movieId);
    });
  },
};
</script>

<style lang="scss">
@import "@/scss/var.scss";
main {
  background-color: $black-var;
  color: $white-var;
}
</style>

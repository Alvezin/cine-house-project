<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "MovieDetails",
  setup() {
    const store = useStore();
    const route = useRoute();

    async function getData() {
      await store.dispatch("getMovieData", route.params.movieId);
      await store.dispatch("getCast");
      await store.dispatch("getTrailerData", route.params.movieId);
      window.scrollTo(0, 0);
    }

    onMounted(async () => {
      await getData();
    });

    watch(
      () => route.params.movieId,
      async () => await getData(),
      {
        deep: true,
      }
    );
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

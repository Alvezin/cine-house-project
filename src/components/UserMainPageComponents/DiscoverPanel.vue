<template>
  <section>
    <h2>Descubra algo novo</h2>
    <movie-card
      v-for="movie in state.discoverMovies"
      :key="movie.id"
      :movieData="movie"
    />
  </section>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  name: "DiscoverPanel",
  components: {
    MovieCard,
  },
  setup() {
    const state = reactive({
      discoverMovies: [],
    });
    const store = useStore();
    onMounted(() => {
      store.dispatch("getDiscover");
      state.discoverMovies = computed(() => store.state.movies.discoverMovies);
    });
    return {
      state,
    };
  },
};
</script>

<style></style>

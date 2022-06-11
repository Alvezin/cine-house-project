<template>
  <section>
    <h2>Descubra algo novo</h2>
    <div class="movie-list">
      <movie-card
        v-for="movie in state.discoverMovies"
        :key="movie.id"
        :movieData="movie"
        class="cards"
      />
    </div>
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

<style lang="scss" scoped>
@import "@/scss/movieListHorizontal.scss";
@include movieListHorizontal;
section {
  margin: 50px 0;
}
h2 {
  float: left;
  margin: 0 0 10px 10px;
}
</style>

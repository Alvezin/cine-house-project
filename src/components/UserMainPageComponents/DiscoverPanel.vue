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
    <h2> Para assitir de madrugada </h2>
    <div class="movie-list">
      <movie-card
        v-for="movie in state.horrorMovies"
        :key="movie.id"
        :movieData="movie"
        class="cards"
      />
    </div>
    <h2> Para a Criançada </h2>
    <div class="movie-list">
      <movie-card
        v-for="movie in state.animationMovies"
        :key="movie.id"
        :movieData="movie"
        class="cards"
      />
    </div>
    <h2> Um Pouquinho de Ação  </h2>
    <div class="movie-list">
      <movie-card
        v-for="movie in state.actionMovies"
        :key="movie.id"
        :movieData="movie"
        class="cards"
      />
    </div>
    <h2> Para Rir Até não Querer Mais </h2>
    <div class="movie-list">
      <movie-card
        v-for="movie in state.comedyMovies"
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
      horrorMovies: [],
      animationMovies: [],
      actionMovies: [],
      comedyMovies: [],
    });
    const store = useStore();

    state.discoverMovies = computed(() => store.state.movies.discoverMovies);
    state.horrorMovies = computed(() => store.state.movies.horrorMovies);
    state.animationMovies = computed(() => store.state.movies.animationMovies);
    state.actionMovies = computed(() => store.state.movies.actionMovies);
    state.comedyMovies = computed(() => store.state.movies.comedyMovies);



    onMounted(() => {
      store.dispatch("getDiscover");
      store.dispatch("getHorrorMovies");
      store.dispatch("getAnimationMovies");
      store.dispatch("getActionMovies");
      store.dispatch("getComedyMovies");
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
  height: fit-content;
}
h2 {
  float: left;
  margin: 30px 0 10px 10px;
}
</style>

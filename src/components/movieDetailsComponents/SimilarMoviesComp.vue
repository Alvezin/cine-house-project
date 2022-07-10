<template>
  <aside>
    <h4>Similares</h4>
    <div class="movie-list">
      <movie-card
        class="cards"
        v-for="(movie, index) in state.movieData"
        :key="index"
        :movieData="movie"
      />
    </div>
  </aside>
</template>

<script>
import MovieCard from "../UserMainPageComponents/MovieCard.vue";
import { useRoute } from "vue-router";
import { reactive } from "@vue/reactivity";
import { makeFetch } from "@/services/axiosConfig";
import { onMounted, watch } from "@vue/runtime-core";
export default {
  name: "SimilarMoviesComp",
  components: {
    MovieCard,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      movieData: {},
    });
    async function getSimilarMovies() {
      const req = await makeFetch(
        `/3/movie/${route.params.movieId}/similar?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&page=1`
      );
      state.movieData = req.data.results;
    }
    onMounted(async () => await getSimilarMovies());
    watch(
      () => route.params.movieId,
      async () => await getSimilarMovies(),
      {
        deep: true,
      }
    );
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/movieListHorizontal.scss";
@include movieListHorizontal();
</style>

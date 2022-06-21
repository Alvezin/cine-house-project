<template>
  <div>
    <section
        :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${state.image})`,
        }"
    >
        <h1 class="titulo">{{ state.movie.title }}</h1>
    </section>
    <movie-description :movie="state.movie"/>
  </div>
</template>

<script>
import MovieDescription from "./MovieDescription.vue"
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  name: "MainDataFromMovie",
  components: {
    MovieDescription
  },
  setup() {
    const state = reactive({
      movie: {},
      image: "",
    });
    const route = useRoute();
    const store = useStore();
    onMounted(() => {
      store.dispatch("getMovieData", route.params.movieId);
    });
    state.movie = computed(() => store.state.movieDetails.movie);
    state.image = computed(() => state.movie.backdrop_path);
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: inset 0px 0px 10px black;
  & .titulo {
    color: white;
    text-transform: uppercase;
    font-size: 31px;
  }
}
</style>

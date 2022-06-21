<template>
  <section :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${state.image})`}">
    <h2>{{ state.movie.title }}</h2>
  </section>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  name: "MainDataFromMovie",
  setup() {
    const state = reactive({
      movie: {},
      image: ""
    });
    const route = useRoute();
    const store = useStore();
    onMounted(() => {
      store.dispatch("getMovieData", route.params.movieId);
    });
    state.movie = computed(() => store.state.movieDetails.movie);
    state.image = computed(() => state.movie.backdrop_path)
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

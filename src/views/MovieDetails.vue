<template>
  <main>
    <MainDataFromMovie />
    <trailer-component />
    <cast-list />
  </main>
</template>

<script>
import MainDataFromMovie from "@/components/movieDetailsComponents/MainDataFromMovie.vue";
import CastList from "@/components/movieDetailsComponents/CastList.vue";
import TrailerComponent from "@/components/movieDetailsComponents/TrailerComponent.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "MovieDetails",
  components: {
    MainDataFromMovie,
    CastList,
    TrailerComponent,
  },
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

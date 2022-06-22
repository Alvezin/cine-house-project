<template>
  <main>
    <MainDataFromMovie />
    <cast-list />
  </main>
</template>

<script>
import MainDataFromMovie from "@/components/movieDetailsComponents/MainDataFromMovie.vue";
import CastList from "@/components/movieDetailsComponents/CastList.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "MovieDetails",
  components: {
    MainDataFromMovie,
    CastList,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    onMounted(async () => {
      await store.dispatch("getMovieData", route.params.movieId);
      await store.dispatch("getCast");
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

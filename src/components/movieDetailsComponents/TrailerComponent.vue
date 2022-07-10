<template>
  <div>
    <h4>Trailers</h4>
    <section class="movie-list">
      <h3
        v-if="state.trailerData.length === 0"
      >Trailer Indisponivel</h3>
      <iframe
        v-else
        class="cards"
        v-for="video in state.trailerData"
        :key="video.id"
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${video.key}`"
        :title="`${video.name}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "TrailerComponent",
  setup() {
    const store = useStore();
    const state = reactive({
      trailerData: [],
    });
    state.trailerData = computed(() => store.state.trailer.trailerData);
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/movieListHorizontal.scss";

@include movieListHorizontal;
div {
  margin: 30px 0;
}
</style>

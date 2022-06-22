<template>
  <aside>
    <h4>Elenco</h4>
    <div class="movie-list">
      <div class="cards" v-for="person in state.cast" :key="person.id">
        <img
          :src="`https://image.tmdb.org/t/p/w200/${person.profile_path}`"
          alt=""
        />
        <h6>{{ person.name }}</h6>
        <h6 class="character">Interpreta: {{ person.character }}</h6>
      </div>
    </div>
  </aside>
</template>

<script>
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "CastList",
  props: ["movieId"],
  setup() {
    const store = useStore();
    const state = reactive({
      cast: null,
    });
    state.cast = computed(() => store.state.movieDetails.cast);
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/movieListHorizontal.scss";
@include movieListHorizontal;
img {
  width: 60px;
}
h4 {
  margin-bottom: 20px;
}
h6 {
  color: white;
}
.cards {
  width: 500px;
}
.character {
  font-size: 7px;
}
</style>

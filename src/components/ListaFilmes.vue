<template>
  <section class="movie-list">
    <div class="cards" v-for="data in state.movieData" :key="data.id">
      <img
        :src="`https://image.tmdb.org/t/p/w200/${data.poster_path}`"
        alt="imagem aqui"
        loading="lazy"
      />
      <h3>{{ data.title }}</h3>
    </div>
  </section>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { makeFetch } from "@/services/axiosConfig";
export default {
  name: "ListaFilmes",
  setup() {
    const state = reactive({
      movieData: null,
      dataUrl:
        "/3/movie/popular?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&page=1",
    });
    async function getDataFromApi() {
      const req = await makeFetch.get(state.dataUrl);
      state.movieData = [...req.data.results];
    }
    onMounted(() => {
      getDataFromApi();
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
</style>

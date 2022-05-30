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
import makeFetch from "@/services/axiosConfig";
export default {
  name: "ListaFilmes",
  setup() {
    const state = reactive({
      movieData: null,
      movieGenres: null,
      dataUrl:
        "/3/movie/popular?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR&page=1",
      genreUrl:
        "/3/genre/movie/list?api_key=f19147dc14a96151bd1c0394b4b3b593&language=pt-BR",
    });
    async function getDataFromApi() {
      const req = await makeFetch.get(state.dataUrl);
      state.movieData = [...req.data.results];
    }
    async function getGenreFromApi() {
      const req = await makeFetch.get(state.genreUrl);
      state.movieGenres = [...req.data.genres];
    }
    onMounted(() => {
      getDataFromApi();
      getGenreFromApi();
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/var.scss";

.movie-list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  height: fit-content;
  width: 100%;
  margin: 50px 0;
  box-shadow: inset 0 5px 5px black;
  padding: 10px;
  & .cards {
    width: 350px;
    height: 400px;
    margin: 0 20px;
    box-shadow: 0 5px 5px black;
    padding: 10px;
    border-radius: 10px;
    background-color: black;
    & img {
      border-radius: 8px;
    }
  }
}
</style>

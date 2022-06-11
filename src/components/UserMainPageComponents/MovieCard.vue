<template>
  <div>
    <div>
      <small> Nota: {{ movieData.vote_average }} </small>
      <small> {{ movieData.vote_count }} votos </small>
    </div>
    <h3>{{ movieData.title }}</h3>
    <img
      :src="`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`"
      alt="Poster do filme"
    />
    <button>ver</button>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movieData"],
};
</script>

<style></style>

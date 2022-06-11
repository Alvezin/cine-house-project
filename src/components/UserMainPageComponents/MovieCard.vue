<template>
  <div>
    <div class="votes">
      <small> {{ movieData.vote_average }} &star; </small>
      <small> {{ movieData.vote_count }} 👍 </small>
    </div>
    <h3>{{ movieData.title }}</h3>
    <img
      :src="`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`"
      alt="Poster do filme"
    />
    <router-link :to="`movie/${movieData.id}_${movieData.title}`">Conferir</router-link>
  </div>
</template>

<script>
import redirectTo from '@/func/RedirectTo';
export default {
  name: "MovieCard",
  props: ["movieData"],
  setup () {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
.votes {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
button {
  @include redirectBtn;
}
img {
  border-radius: 8px;
}
h3 {
  font-size: 17px;
}
</style>

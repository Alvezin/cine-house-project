<template>
  <div>
    <div class="votes">
      <small> {{ movieData.vote_average }} &star; </small>
      <small> {{ movieData.vote_count }} 👍 </small>
    </div>
    <router-link
      class="redirectLink"
      :to="`movie/${movieData.id}_${movieData.title}`"
      ><h3>{{ movieData.title }}</h3></router-link
    >
    <img
      :src="`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`"
      alt="Poster do filme"
    />
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movieData"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
.votes {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.redirectLink {
  text-decoration: none;
}
img {
  border-radius: 8px;
}
h3 {
  font-size: 17px;
}
</style>

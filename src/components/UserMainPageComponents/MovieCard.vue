<template>
  <div>
    <div class="votes">
      <small> {{ movieData.vote_average }} &star; </small>
      <small> {{ movieData.vote_count }} 👍 </small>
    </div>
    <router-link class="redirectLink" :to="`movie/${movieData.id}/detalhe`"
      ><h4>{{ movieData.title }}</h4></router-link
    >
    <router-link :to="`movie/${movieData.id}/detalhe`" class="redirectImg">
      <img
        :src="`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`"
        alt="Poster do filme"
      />
    </router-link>
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
  color: white;
  &:hover {
    text-decoration: underline;
  }
}

img {
  border-radius: 8px;
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
}
.redirectImg {
  &:hover {
    filter: grayscale(30%);
    -webkit-filter: grayscale(30%);
    transition: 0.5s;
  }
}

h3 {
  font-size: 17px;
}
</style>

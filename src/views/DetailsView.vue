<template>
  <main>
    <MainDataFromMovie />
    <button-component />
    <trailer-component class="similar" />
    <cast-list class="similar" />
    <similar-movies-comp class="similar" />
  </main>
</template>

<script>
import MainDataFromMovie from "@/components/movieDetailsComponents/MainDataFromMovie.vue";
import SimilarMoviesComp from "@/components/movieDetailsComponents/SimilarMoviesComp.vue";
import ButtonComponent from "@/components/elements/ButtonComp.vue";
import CastList from "@/components/movieDetailsComponents/CastList.vue";
import TrailerComponent from "@/components/movieDetailsComponents/TrailerComponent.vue";
export default {
  name: "DetailsView",
  components: {
    MainDataFromMovie,
    ButtonComponent,
    CastList,
    SimilarMoviesComp,
    TrailerComponent,
  },
};
</script>

<style lang="scss">
.similar {
  margin-top: 30vh;
}
</style>

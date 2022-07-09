<template>
  <main>
    <MainDataFromMovie />
    <button-component />
    <trailer-component />
    <cast-list />
  </main>
</template>

<script>
import MainDataFromMovie from "@/components/movieDetailsComponents/MainDataFromMovie.vue";
import ButtonComponent from "@/components/elements/ButtonComp.vue";
import CastList from "@/components/movieDetailsComponents/CastList.vue";
import TrailerComponent from "@/components/movieDetailsComponents/TrailerComponent.vue";
export default {
  name: "DetailsView",
  components: {
    MainDataFromMovie,
    ButtonComponent,
    CastList,
    TrailerComponent,
  },
}
</script>

<style>

</style>
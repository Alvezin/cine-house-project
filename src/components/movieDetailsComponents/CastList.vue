<template>
  <aside>jubilue</aside>
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

<style></style>

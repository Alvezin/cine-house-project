<template>
  <main>
    <h1>
      Seja Bem Vindo, <strong> {{ state.client.nome }} </strong>
    </h1>
    <discover-panel />
  </main>
</template>

<script>
import DiscoverPanel from "@/components/UserMainPageComponents/DiscoverPanel.vue";
import { reactive } from "@vue/reactivity";
import { computed, onBeforeMount } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "UserIndexView",
  components: {
    DiscoverPanel,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      client: [],
      id: null,
    });
    const store = useStore();
    onBeforeMount(() => {
      state.id = computed(() => route.params.id);
      store.dispatch("getClient", state.id);
    });
    state.client = computed(() => store.state.client.client);
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/var.scss";
main {
  color: white;
  background-color: $black-var;
}
</style>

<template>
  <main>
    <main-header />
    <router-view />
  </main>
</template>

<script>
import MainHeader from "@/components/UserMainPageComponents/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>

<style></style>

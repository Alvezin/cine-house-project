<template>
  <header-component />
  <router-view />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  setup() {},
};
</script>
<style lang="scss">
@import "./scss/var.scss";
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $black-var;

    &.router-link-exact-active {
      color: $red2-var;
    }
  }
}
</style>

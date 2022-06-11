<template>
  <header>
    <a href="/">
      <img src="@/assets/logo.png" alt="Logo" />
      Cine House
    </a>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
header {
  @include headerStyle;
}
</style>

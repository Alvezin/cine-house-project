<template>
  <header>
    <a href="/">
      <img src="@/assets/logo.png" alt="Logo" />
      Cine House
    </a>
    <div>
      <button @click="redirectTo('/login')">Login</button> |
      <button @click="redirectTo('/cadastro')">Criar Conta</button>
    </div>
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

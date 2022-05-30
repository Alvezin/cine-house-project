<template>
  <header>
    <a href="/">
      <img src="../assets/logo.png" alt="Logo" />
      Cine House
    </a>
    <div>
      <button @click="redirectTo('/login')">Login</button> |
      <button @click="redirectTo('/cadastro')">Criar Conta</button>
    </div>
  </header>
</template>

<script>
import redirectTo from "@/func/RedirectTo";
export default {
  setup() {
    return {
      redirectTo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/var.scss";

header {
  @include headerStyle;
  & div {
    & button {
      text-transform: uppercase;
      padding: 5px 7px;
      cursor: pointer;
      background-color: black;
      border: none;
      color: white;
      border-radius: 8px;
    }
  }
}
</style>

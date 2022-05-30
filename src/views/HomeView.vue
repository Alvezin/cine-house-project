<template>
  <body>
    <slogan-principal />
    <h1>O melhor do cinema você encontra aqui!</h1>
    <p>
      Com um catálogo enorme, o entretenimento é garantido para você e toda a
      família! Crie sua conta hoje mesmo e se divirta!<strong>
        É de graça!</strong
      >
    </p>
    <lista-filmes />
  </body>
</template>

<script>
import SloganPrincipal from "../components/SloganPrincipal.vue";
import ListaFilmes from "../components/ListaFilmes.vue";
export default {
  name: "HomeView",
  components: {
    SloganPrincipal,
    ListaFilmes,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/var.scss";
body {
  background-color: $black-var;
  height: 1fr;
  color: $white-var;
  & p {
    margin: 50px;
  }
  & h1 {
    margin: 30px;
  }
}
</style>

<template>
  <body>
    <header-component />
    <slogan-principal />
    <h1>O melhor do cinema você encontra aqui!</h1>
    <p>
      Com um catálogo enorme, o entretenimento é garantido para você e toda a
      família! Crie sua conta hoje mesmo e se divirta!<strong>
        É de graça!</strong
      >
    </p>
    <lista-filmes />
    <h2>Gostou? Abra sua conta agora mesmo e aproveite ainda mais conteúdo!</h2>
    <div class="content-div">
      <ul>
        <li>Assista seus filmes gratuitamente</li>
        <li>Obtenha informações sobre seus filmes favoritos!</li>
        <li>E muito mais!</li>
      </ul>
      <button @click="redirectTo('/cadastro')">Vamos lá</button>
    </div>
  </body>
</template>

<script>
import SloganPrincipal from "../components/SloganPrincipal.vue";
import ListaFilmes from "../components/ListaFilmes.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import redirectTo from "@/func/RedirectTo";
export default {
  name: "HomeView",
  components: {
    SloganPrincipal,
    ListaFilmes,
    HeaderComponent,
  },
  setup() {
    return {
      redirectTo,
    };
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
  & .content-div {
    width: 500px;
    height: 250px;
    margin: auto;
    & button {
      @include redirectBtn; //mixins estão no arquivo var.scss
    }
    & ul {
      & li {
        margin: 10px 0;
      }
    }
  }
}
</style>

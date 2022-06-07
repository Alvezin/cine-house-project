<template>
  <form>
    <h2>Login</h2>
    <div>
      <label for="email">E-mail:</label>
      <input
        type="email"
        placeholder="Insira o e-mail..."
        v-model="state.email"
      />
    </div>

    <div>
      <label for="password">Crie uma senha:</label>
      <input
        type="password"
        placeholder="Insira uma senha..."
        v-model="state.senha"
      />
    </div>

    <div class="buttonLinkDiv">
      <button @click.prevent="checkLogin()">Fazer Login</button>
      <small>Ou fazer <a href="/cadastro">fazer cadastro</a></small>
    </div>
    <message-component :msg="state.msg" :cleanMsg="cleanMsg" />
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { clientDB } from "@/services/axiosConfig";
import MessageComponent from "../MessageComponent.vue";
export default {
  name: "LoginComponent",
  components: {
    MessageComponent,
  },
  setup() {
    const state = reactive({
      email: null,
      senha: null,
      dataFromDB: null,
      msg: null,
    });
    function compareLoginData() {
      state.dataFromDB.forEach((element) => {
        if (element.email === state.email && element.senha === state.senha) {
          state.msg = "Usuário autenticado";
        } else {
          state.msg = "Email ou senha incorretos";
        }
      });
    }
    async function checkLogin() {
      try {
        const req = await clientDB.get("/clientes");
        state.dataFromDB = req.data;
        compareLoginData();
      } catch (error) {
        state.msg = error;
      }
    }
    function cleanMsg() {
      state.msg = null;
    }
    return {
      state,
      checkLogin,
      cleanMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
form {
  @include formStyle;
  & .buttonLinkDiv {
    @include buttonLinkBoxStyle;
  }
}
</style>

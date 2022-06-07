<template>
  <form>
    <h2>Cadastro</h2>
    <div>
      <label for="nome">Nome:</label>
      <input type="text" placeholder="Insira o nome..." v-model="state.nome" />
    </div>
    <div>
      <label for="sobrenome">Sobrenome:</label>
      <input
        type="text"
        placeholder="Insira o sobrenome..."
        v-model="state.sobrenome"
      />
    </div>
    <div>
      <label for="idade">Idade:</label>
      <input
        type="text"
        placeholder="Insira a idade..."
        v-model="state.idade"
      />
    </div>
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
      <small style="font-size: 10px"
        >A senha deve conter: 1 letra maiuscula, 1 número e 1 caractere
        especial.</small
      >
    </div>
    <message-component :msg="state.msg" cleanMsg="cleanMsg" />
    <div class="buttonLinkDiv">
      <button @click.prevent="dataValidation()">Cadastrar</button>
      <small>Ou fazer <a href="/login">fazer login</a></small>
    </div>
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { clientDB } from "@/services/axiosConfig";
import validator from "validator";
import redirectTo from "@/func/RedirectTo";
import MessageComponent from "../MessageComponent.vue";
export default {
  name: "CadastroForm",
  components: {
    MessageComponent,
  },
  setup() {
    const state = reactive({
      nome: null,
      sobrenome: null,
      idade: null,
      email: null,
      senha: null,
      msg: null,
    });
    function newClient() {
      return {
        nome: state.nome,
        sobrenome: state.sobrenome,
        idade: state.idade,
        email: state.email,
        senha: state.senha,
      };
    }
    function cleanFields() {
      state.nome = null;
      state.sobrenome = null;
      state.idade = null;
      state.email = null;
      state.senha = null;
    }
    async function sendDatatoDB() {
      const req = await clientDB.post("/clientes", newClient());
      state.msg = `O cadastro número ${req.data.id} foi Realizado com sucesso.`;
    }
    async function dataValidation() {
      try {
        if (
          state.nome === null ||
          validator.isEmpty(state.nome, { ignore_whitespace: true }) ||
          !validator.isAlpha(state.nome, "pt-BR") ||
          !validator.isLength(state.nome, { min: 3 })
        )
          throw new Error("Digite um nome válido");

        if (
          state.sobrenome === null ||
          validator.isEmpty(state.sobrenome, { ignore_whitespace: false }) ||
          !validator.isAlpha(state.sobrenome, "pt-BR", { ignore: " " }) ||
          !validator.isLength(state.sobrenome, { min: 3 })
        )
          throw new Error("Insira um sobrenome válido");

        if (state.idade === null || !validator.isNumeric(state.idade))
          throw new Error("O campo idade aceita apenas números.");

        if (state.email === null || !validator.isEmail(state.email))
          throw new Error("Insira um E-mail válido");

        if (state.senha === null || !validator.isStrongPassword(state.senha))
          throw new Error("Digite uma senha válida");

        await sendDatatoDB();
        cleanFields();
        redirectTo("/login");
      } catch (error) {
        state.msg = error;
      }
    }
    function cleanMsg() {
      state.msg = null;
    }
    return {
      state,
      dataValidation,
      cleanMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/var.scss";
form {
  @include formStyle;
}
.buttonLinkDiv {
  @include buttonLinkBoxStyle;
}
</style>

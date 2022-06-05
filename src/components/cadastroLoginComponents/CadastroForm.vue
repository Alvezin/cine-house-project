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
        type="number"
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
    </div>
    <message-component :msg="state.msg" cleanMsg="cleanMsg"/>
    <div class="buttonLinkDiv">
      <button @click.prevent="sendNewClientDB()">Cadastrar</button>
      <small>Ou fazer <a href="/login">fazer login</a></small>
    </div>
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { clientDB } from "@/services/axiosConfig";
import redirectTo from "@/func/RedirectTo";
import MessageComponent from "../MessageComponent.vue";
export default {
  name: "CadastroForm",
  components:{
    MessageComponent
  },
  setup() {
    const state = reactive({
      nome: null,
      sobrenome: null,
      idade: null,
      email: null,
      senha: null,
      msg: null
    });
    function newClient () {
      return {
        nome: state.nome,
        sobrenome: state.sobrenome,
        idade: state.idade,
        email: state.email,
        senha: state.senha,
      }
    }
    function cleanFields () {
      state.nome = null
      state.sobrenome = null
      state.idade = null
      state.email = null
      state.senha = null
    }
    async function sendNewClientDB() { // continue aqui GABs 
      try{
        if(parseInt(state.idade) === NaN) throw new Error('O campo Idade aceita apenas números')
        const req = await clientDB.post("/clientes", newClient());
        state.msg = `O cadastro número ${req.data.id} foi Realizado com sucesso.`
        cleanFields()
        redirectTo('/login')
      } catch (error){
        state.msg = error
      }
    }
    function cleanMsg () {
      state.msg = null
    }
    return {
      state,
      sendNewClientDB,
      cleanMsg
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/var.scss";
form {
  @include formStyle;
}
.buttonLinkDiv{
  @include buttonLinkBoxStyle;
}
</style>

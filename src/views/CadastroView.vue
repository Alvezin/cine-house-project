<template>
  <main>
    <header-component />
    <cadastro-form />
  </main>
</template>

<script>
import HeaderComponent from "@/components/cadastroLoginComponents/HeaderComponent.vue";
import CadastroForm from "@/components/cadastroLoginComponents/cadastroForm.vue";
export default {
  name: "CadastroView",
  components: {
    HeaderComponent,
    CadastroForm,
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: 500px;
}
</style>

<template>
  <header-component />
  <login-component />
</template>

<script>
import HeaderComponent from "@/components/cadastroLoginComponents/HeaderComponent.vue";
import LoginComponent from "@/components/cadastroLoginComponents/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    LoginComponent,
  },
};
</script>

<style></style>

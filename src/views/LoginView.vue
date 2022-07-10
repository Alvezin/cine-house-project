<template>
  <main>
    <header-component />
    <section>
      <login-component />
    </section>
  </main>
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

<style lang="scss" scoped>
section {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>

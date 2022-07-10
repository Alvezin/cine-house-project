<template>
  <section>
    <section class="slogan">
      <small>Resident Evil Vendetta</small>
    </section>
  </section>
</template>

<script>
export default {
  name: "SloganPrincipal",
};
</script>

<style lang="scss" scoped>
@import "../scss/var.scss";
section {
  background-color: $black-var;
  color: $white-var;
  & .slogan {
    background-image: url("../assets/img/resident-evil.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;
    & small {
      display: block;
      text-align: end;
    }
  }
}
</style>

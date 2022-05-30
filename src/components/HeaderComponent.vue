<template>
  <header>
    <a href="/">
      Cine <br />
      House
    </a>
    <div>
      <button>Login</button> |
      <button>Criar Conta</button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/var.scss";

header {
  height: 150px;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & a {
    color: $red-var;
    font-weight: bold;
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
  }
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

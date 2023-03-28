<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <button class="btn btn-primary">Click me!</button>
    </div>
    <ButtonType>登入</ButtonType>
  </div>
</template>

<script>
import ButtonType from "./components/ButtonType.vue";

export default {
  name: "App",
  components: {
    ButtonType,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

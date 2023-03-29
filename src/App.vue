<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <button class="btn btn-primary">Click me!</button>
    </div>
    <ButtonType>登入</ButtonType>
    <InputType />
  </div>
</template>

<script>
import ButtonType from "./components/ButtonType.vue";
import InputType from "./components/InputType.vue";

export default {
  name: "App",
  components: {
    ButtonType,
    InputType,
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

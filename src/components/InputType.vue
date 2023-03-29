<template lang="">
  <div class="position-relative">
    <input
      :type="type"
      class="input_style"
      @input="$emit('input', $event.target.value)"
    />
    <IconImg
      v-if="showEye"
      class="position-absolute icon_style"
      :src="iconEye"
      @click="toggle"
    />
  </div>
</template>
<script>
import IconImg from "./IconImg.vue";
export default {
  name: "InputType",
  components: {
    IconImg,
  },
  props: {
    showEye: {
      require: true,
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      iconEye: require("@/assets/icon/eye.png"),
      iconCloseEye: require("@/assets/icon/close_eye.png"),
      type: this.type || "text",
    };
  },
  methods: {
    toggle() {
      let typeState = this.type;
      typeState === "password"
        ? (this.type = "text")
        : (this.type = "password"),
        typeState === "password"
          ? (this.iconEye = require("@/assets/icon/eye.png"))
          : (this.iconEye = require("@/assets/icon/close_eye.png"));
    },
  },
};
</script>
<style lang="sass">
@import @/styles/variables.sass

input:focus
    border: 1px solid $focus-color

input::placeholder
    color: $placeholder-color

.input_style
    width: 100%
    height: 38px
    padding-left: 16px
    border-radius: 8px
    padding-left: 16px
    margin-top: 4px
    font-size: 16px

.icon_style
    right: 2px
    top: 2px
    cursor: pointer
</style>

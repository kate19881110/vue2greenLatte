<template lang="">
  <button
    class="common_style"
    :class="[text, textHover]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonType",
  props: {
    text: {
      default: "textBtn",
      type: String,
    },
    textHover: {
      default: "textBtn:hover",
      type: String,
    },
  },
};
</script>
<style lang="sass" scoped>
@import @/styles/common.sass

.common_style
  @extend .common_button

.textBtn
  @extend .button_text

.textBtn:hover
  @extend .button_text_hover
</style>

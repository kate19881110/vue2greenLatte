<template lang="">
  <img :src="src" class="icon_size" @click="$emit('click')" />
</template>
<script>
export default {
  name: "IconImg",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="sass">
.icon_size
  width: 36px
  height: 36px
</style>

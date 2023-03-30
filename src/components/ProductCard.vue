<template lang="">
  <div
    class="col-sm-6 col-md-6 col-lg-4 col-xl-4 position-relative product_item"
  >
    <div class="product_img">
      <img :src="item.vImg" />
      <div class="product_info">
        <h4>{{ item.category }}:</h4>
        <h5>{{ item.productName }}</h5>
      </div>
      <div class="product_add">
        <h4 @click="$emit('addDIY')">Add to DIY</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="sass">
@import @/styles/variables.sass

.product_item
    width: 100%
    height: 100%
    height: auto
    margin: 0px auto
    gap: 10%
    justify-content: center
    img
        width: 200px
        display: inline-block
        background-color: $light-text-color
        border: 3px solid $deepGreen-bg-color
        border-radius: 10px
.product_img:hover
    position: relative
    .product_info
        margin: 0px auto
        margin-top: 10px
        width: 200px
        border-radius: 10px
        border: 3px solid $deepGreen-bg-color
        display: flex
        align-items: center
        h4
            display: inline-block
            background-color: $deepGreen-bg-color
            margin: 0px
            padding: 0px
            padding-right: 5px
            color: white
        h5
            display: inline-block
            margin: 0px
            padding: 0px
            color: $deepGreen-bg-color
            padding-left: 10px

    .product_add
        width: 300px
        margin: 0px auto
        margin-left: 15px
</style>

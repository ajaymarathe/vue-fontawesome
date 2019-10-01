<template>
  <div>
    <i :class="iconClass" :style="styleObject" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: "vue-fontawesome",
  props: ["icon", "color", "size"],
  data() {
    return {
      iconClass: "fa fa-" + this.icon,
      styleObject: {
        color: this.color,
        fontSize: this.size + "rem"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
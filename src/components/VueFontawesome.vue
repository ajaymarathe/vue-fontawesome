<template>
  <div>
    <i v-if="iconClass =='fa fa-'" :class="FaIcon" :style="styleObject" aria-hidden="true"></i>
    <i v-else :class="iconClass" :style="styleObject" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: "vue-fontawesome",
  props: ["icon", "color", "size"],
  data() {
    return {
      FaIcon: this.icon,
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
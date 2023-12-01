<!--
 * button按钮组
 * @author: becomer
 * @since: 2023-12-01
 * index.vue
-->
<template>
  <div class="mu-button-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MuButtonGroup",
});
</script>
<style lang="scss">
@import "@/assets/css/buttonGroup.scss";
</style>

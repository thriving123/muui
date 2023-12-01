<!--
 * 图标组件
 * @author: becomer
 * @since: 2023-11-28
 * index.vue
-->
<template>
  <svg :style="style">
    <use :xlink:href="'#icon-' + props.name" :fill="props.color"></use>
  </svg>
</template>

<script setup lang="ts">
import { MuIcon } from "./index.d";
import { computed } from "vue";
const props = withDefaults(defineProps<MuIcon>(), {
  size: "1rem",
  color: "#000000",
});

const style = computed(() => {
  return {
    width: props.size,
    height: props.size,
    fontSize: props.size,
    // 加载loading动画
    animation: props.loading ? "mu-icon-spin 1s linear infinite" : "none",
  };
});
</script>

<style lang="scss">
@keyframes mu-icon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

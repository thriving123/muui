<!--
 * 按钮组件
 * @author: becomer
 * @since: 2023-11-28
 * index.vue
-->
<template>
  <button :class="btnClass" :disabled="props.disabled || props.loading">
    <span
      class="mu-button-icon mu-button-left"
      v-if="props.iconPosition === 'left' && (props.icon || props.loading)"
    >
      <mu-icon
        name="loading"
        loading
        v-if="props.loading"
        color="#fff"
        :size="btnIconSize"
      ></mu-icon>
      <mu-icon v-else :size="btnIconSize" :name="props.icon"></mu-icon>
    </span>
    <span><slot></slot></span>
    <span
      class="mu-button-icon mu-button-right"
      v-if="props.iconPosition === 'right' && (props.icon || props.loading)"
    >
      <mu-icon
        name="loading"
        loading
        v-if="props.loading"
        color="#fff"
        :size="btnIconSize"
      ></mu-icon>
      <mu-icon v-else :size="btnIconSize" :name="props.icon"></mu-icon>
    </span>
  </button>
</template>

<script setup lang="ts">
import { MuBtn } from "./index.d";
import { ComputedRef, computed } from "vue";
const props = withDefaults(defineProps<MuBtn>(), {
  type: "primary",
  size: "medium",
  disabled: false,
  loading: false,
  iconPosition: "left",
  icon: "",
});
const btnClass: ComputedRef<string[]> = computed(() => {
  return ["mu-button", `mu-button-${props.type}`, `mu-button-${props.size}`];
});
const btnIconSize = computed(() => {
  let size;
  switch (props.size) {
    case "mini":
      size = ".5rem";
      break;
    case "small":
      size = ".75rem";
      break;
    case "medium":
      size = "1rem";
      break;
    case "large":
      size = "1.25rem";
      break;
    default:
      size = "1rem";
  }
  return size;
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MuButton",
});
</script>
<style lang="scss">
@import "@/assets/css/button.scss";
</style>

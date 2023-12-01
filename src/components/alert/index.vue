<!--
 * alert组件
 * @author: becomer
 * @since: 2023-12-01
 * index.vue
-->
<template>
  <Transition name="fade">
    <div :class="alertClass" v-if="show">
      <div
        class="mu-alert-content"
        :class="{ 'mu-content-closable': props.closable }"
      >
        <div class="mu-alert-icon" v-if="props.icon">
          <mu-icon color="#fff" :name="icon"></mu-icon>
        </div>
        <div class="mu-alert-message">
          <slot></slot>
        </div>
      </div>
      <div class="mu-alert-close" v-if="props.closable">
        <mu-icon
          @click="onClick"
          name="close"
          color="#fff"
          size="1rem"
        ></mu-icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
const onClick = () => {
  show.value = false;
};
import { computed } from "vue";
import { MuAlert } from "./index.d";
const props = withDefaults(defineProps<MuAlert>(), {
  type: "primary",
  closable: false,
});
const alertClass = computed(() => {
  return ["mu-alert", `mu-alert-${props.type}`];
});
</script>

<style lang="scss">
@import "@/assets/css/alert.scss";
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

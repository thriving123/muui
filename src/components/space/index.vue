<!--
 * space间隔组件
 * @author: becomer
 * @since: 2023-12-01
 * index.vue
-->
<template>
  <div class="mu-space">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.mu-space {
  display: flex;
  flex-wrap: wrap;
  // justify-content: ;
}
.mu-space > *:not(:last-child) {
  margin-right: 1.5rem;
}
</style>

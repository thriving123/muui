<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <mu-button type="primary">Hello World</mu-button>
    <mu-button type="success">Hello World</mu-button>
    <mu-button type="warning">Hello World</mu-button>
    <mu-button type="danger">Hello World</mu-button>
    <mu-button type="info">Hello World</mu-button>
    <mu-button type="purple">Hello World</mu-button>
  </div>
  <div>
    <mu-button size="small" type="primary">Hello World</mu-button>
    <mu-button size="large" type="success">Hello World</mu-button>
    <mu-button size="mini" type="warning">Hello World</mu-button>
    <mu-button size="middle" type="danger">Hello World</mu-button>
  </div>
  <div>
    <mu-button disabled type="primary" loading>Hello World</mu-button>
    <mu-button disabled type="success" loading>Hello World</mu-button>
    <mu-button disabled type="warning" loading>Hello World</mu-button>
    <mu-button disabled type="danger" loading>Hello World</mu-button>
    <mu-button disabled type="info" loading>Hello World</mu-button>
    <mu-button disabled type="purple" loading>Hello World</mu-button>
  </div>
  <div>
    <mu-button-group>
      <mu-button type="primary">Hello World</mu-button>
      <mu-button type="success">Hello World</mu-button>
      <mu-button type="warning">Hello World</mu-button>
      <mu-button type="danger">Hello World</mu-button>
      <mu-button type="info">Hello World</mu-button>
      <mu-button type="purple">Hello World</mu-button>
    </mu-button-group>
  </div>
  <div>
    <mu-space>
      <mu-button type="primary">Hello World</mu-button>
      <mu-button type="success">Hello World</mu-button>
      <mu-button type="warning">Hello World</mu-button>
      <mu-button type="danger">Hello World</mu-button>
      <mu-button type="info">Hello World</mu-button>
      <mu-button type="purple">Hello World</mu-button>
    </mu-space>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped></style>

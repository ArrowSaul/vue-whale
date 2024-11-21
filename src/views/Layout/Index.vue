<!-- 页头 -->
<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
</script>

<template>
  <LayoutFixed />
  <LayoutHeader />
  <RouterView />
</template>
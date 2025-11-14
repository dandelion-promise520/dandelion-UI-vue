<script setup lang="ts">
import { DlButton } from "./components/button";
</script>

<template>
  <div class="layout">
    <dl-button type="primary">点击</dl-button>
    <dl-button :disabled="true">禁用</dl-button>
    <dl-button :round="true">圆角</dl-button>
    <dl-button :circle="true">圆</dl-button>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  gap: 20px;
}
</style>

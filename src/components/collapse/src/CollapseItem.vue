<template>
  <Collapse>
    <div class="title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from "./Collapse.vue";
import type { CollapseProps } from "./types";

defineProps<CollapseProps>();

defineOptions({
  name: "DlCollapseItem",
});
</script>

<style scoped></style>

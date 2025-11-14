<template>
  <button
    ref="_ref"
    class="dl-button"
    :class="{
      [`dl-button-${type}`]: type,
      [`dl-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import "../style/style.css";
import { ref } from "vue";
import type { ButtonProps } from "./types";

defineOptions({ name: "DlButton" });

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();

defineExpose({ ref: _ref });
</script>

<style scoped></style>

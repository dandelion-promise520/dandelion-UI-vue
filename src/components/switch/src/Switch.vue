<template>
  <label id="switch">
    <input type="checkbox" :checked="props.checked" />
    <text class="off">off</text>
    <text class="on">on</text>
    <div class="angle"></div>
  </label>
</template>

<script setup lang="ts">
import "../style/style.css";
import type { SwitchProps } from "./types";

defineOptions({ name: "DlSwitch" });

const props = withDefaults(defineProps<SwitchProps>(), {
  checked: false,
});
</script>

<script setup lang="ts">
import { DlButton } from "./components/button";
import { DlCollapse } from "./components/collapse";
</script>

<template>
  <div class="button-example">
    <div class="button-row">
      <dl-button>Default</dl-button>
      <dl-button type="primary">Primary</dl-button>
      <dl-button type="success">Success</dl-button>
      <dl-button type="info">Info</dl-button>
      <dl-button type="warning">Warning</dl-button>
      <dl-button type="danger">Danger</dl-button>
    </div>

    <div class="button-row">
      <dl-button plain>Default</dl-button>
      <dl-button type="primary" plain>Primary</dl-button>
      <dl-button type="success" plain>Success</dl-button>
      <dl-button type="info" plain>Info</dl-button>
      <dl-button type="warning" plain>Warning</dl-button>
      <dl-button type="danger" plain>Danger</dl-button>
    </div>

    <div class="button-row">
      <dl-button round>Round</dl-button>
      <dl-button type="primary" round>Primary</dl-button>
      <dl-button type="success" round>Success</dl-button>
      <dl-button type="info" round>Info</dl-button>
      <dl-button type="warning" round>Warning</dl-button>
      <dl-button type="danger" round>Danger</dl-button>
    </div>

    <div class="button-row">
      <dl-button type="primary" size="large">large</dl-button>
      <dl-button type="primary">Default</dl-button>
      <dl-button type="primary" size="small">small</dl-button>
    </div>
  </div>

  <div class="collapse-example">
    <DlCollapse></DlCollapse>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .button-row {
    display: flex;
    gap: 20px;
  }
}
</style>

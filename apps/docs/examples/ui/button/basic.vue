<template>
  <div class="demo-button">
    <SButton>按钮</SButton>
    <SButton type="primary">按钮</SButton>
    <SButton type="success">按钮</SButton>
    <SButton type="warning">按钮</SButton>
    <SButton type="danger">按钮</SButton>
    <SButton type="info">按钮</SButton>
  </div>
</template>

<script setup lang="ts">
// import { SButton } from '@slime/ui';
</script>

<style scoped>
.demo-button {
  display: flex;
  gap: 16px;
}
</style>

<template>
  <a-space>
    <SDialog v-model:open="open">
      <div>弹窗测试2222</div>
    </SDialog>
    <a-button @click="open = true"> 弹窗 </a-button>
  </a-space>
</template>

<script setup lang="ts">
import { SDialog } from '~/@slime/ui';
import { ref } from 'vue';
console.log(SDialog);
const open = ref(false);
</script>

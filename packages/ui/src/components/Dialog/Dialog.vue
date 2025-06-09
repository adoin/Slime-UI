<template>
  <dialog v-if="open" class="s-dialog">
    <div class="s-dialog__overlay" @click="close" />
    <div class="s-dialog__content">
      <slot />
    </div>
  </dialog>
</template>

<script setup lang="ts">
import type { DialogEmits, DialogProps } from './Dialog.types';

defineOptions({
  name: 'SDialog',
});

defineProps<DialogProps>();

const open = defineModel<boolean>('open');

const emit = defineEmits<DialogEmits>();

const close = () => {
  emit('close');
  open.value = false;
};
</script>

<style lang="scss">
@use './Dialog.scss' as *;
</style>

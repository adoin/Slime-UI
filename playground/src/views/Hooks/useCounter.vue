<template>
  <a-button @click="increment">+</a-button>
  <a-button @click="decrement">-</a-button>
  <div>{{ count }}</div>
</template>

<script setup lang="ts">
import { useCounter } from '@slime/hooks';

const { count, increment, decrement } = useCounter();
</script>

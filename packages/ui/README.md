# @slime/ui

Vue 3 组件库，基于 Vue 3 + TypeScript 构建的现代化组件库。

## 特性

- 🚀 基于 Vue 3 + TypeScript 构建
- 📦 支持按需引入
- 💪 使用 Monorepo + pnpm 工作区管理
- 📝 完整的类型定义
- 🔧 完善的开发工具链

## 安装

```bash
npm install @slime/ui

yarn add @slime/ui

pnpm add @slime/ui
```

## 快速开始

### 全局引入

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import VUI from '@slime/ui';
import '@slime/ui/style.css';

const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

### 按需引入

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import { Button } from '@slime/ui';
import '@slime/ui/style.css';

const app = createApp(App);
app.use(Button);
app.mount('#app');
```

## 使用示例

```vue
<template>
  <SButton @click="open = true">弹窗</SButton>
  <SButton type="primary">按钮</SButton>
  <SButton type="success">按钮</SButton>
  <SButton type="warning">按钮</SButton>
  <SButton type="danger">按钮</SButton>
  <SButton type="info">按钮</SButton>
  <SDialog v-model:open="open">
    <div>弹窗测试2222</div>
  </SDialog>
</template>

<script setup lang="ts">
import { SButton, SDialog } from '@slime/ui';
import { ref } from 'vue';
const open = ref(false);
</script>
```

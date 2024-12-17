# @mylib/ui

Vue 3 组件库，基于 Vue 3 + TypeScript 构建的现代化组件库。

## 特性

- 🚀 基于 Vue 3 + TypeScript 构建
- 📦 支持按需引入
- 💪 使用 Monorepo + pnpm 工作区管理
- 📝 完整的类型定义
- 🔧 完善的开发工具链

## 安装

```bash
npm
npm install @mylib/ui

yarn
yarn add @mylib/ui

pnpm
pnpm add @mylib/ui
```

## 快速开始

```ts
// main.ts
import { createApp } from 'vue';
import VUI from '@mylib/ui';
import '@mylib/ui/style.css';
import App from './App.vue';
const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

## 按需引入

```ts
// main.ts
import { createApp } from 'vue';
import { Button } from '@mylib/ui';
import '@mylib/ui/style.css';
import App from './App.vue';
const app = createApp(App);
app.use(Button);
app.mount('#app');
```

## 组件列表

### 基础组件

- Button 按钮

### 反馈组件

- Dialog 对话框

## 目录结构

packages/ui/
├── src/ # 组件源码
│ ├── components/ # 组件
│ ├── \_utils/ # 组件内部使用的相关工具函数
│ └── index.ts # 入口文件
├── dist/ # 构建输出目录
├── types/ # 类型声明文件
└── package.json # 包配置文件

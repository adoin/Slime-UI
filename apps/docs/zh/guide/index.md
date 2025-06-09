# 快速开始

## 介绍

slime-template 是一个基于 Vue3 的组件库和工具集模板项目，包含以下几个部分：

- UI 组件库：提供常用的 UI 组件
- 工具函数：提供常用的工具函数
- Hooks：提供可复用的组合式函数
- Directives：提供常用的指令

## 安装

使用包管理器安装：

::: code-group

```bash [npm]
npm install @slime/ui @slime/utils @slime/hooks @slime/directives
```

```bash [yarn]
yarn add @slime/ui @slime/utils @slime/hooks @slime/directives
```

```bash [pnpm]
pnpm add @slime/ui @slime/utils @slime/hooks @slime/directives
```

```bash [bun]
bun add @slime/ui @slime/utils @slime/hooks @slime/directives
```

:::

## 使用

### UI 组件

```ts
// 全局引入
import { createApp } from 'vue';
import UI from '@slime/ui';
import '@slime/ui/style.css';
const app = createApp(App);
app.use(UI);
//  tsconfig.json 还需要添加以下配置以获得类型提示：
//  "types": ["@slime/ui/global.d.ts"]

// 按需引入
import { Button } from '@slime/ui';
import '@slime/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### 工具函数

```ts
import { isString } from '@slime/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@slime/hooks';
const { count, increment, decrement } = useCounter();
```

### 指令

```ts
import { vFocus } from '@slime/directives';
// 全局引入
app.directive('focus', vFocus);

// 按需引入
import { vFocus } from '@slime/directives';
app.directive('focus', vFocus);
```

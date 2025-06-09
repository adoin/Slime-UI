# Quick Start

## Introduction

slime-template is a component library and toolkit template project based on Vue3, consisting of the following parts:

- UI Component Library: Provides commonly used UI components
- Utility Functions: Offers common utility functions
- Hooks: Provides reusable composable functions
- Directives: Offers commonly used directives

## Installation

Install using a package manager:

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

## Usage

### UI Components

```ts
// Global import
import { createApp } from 'vue';
import UI from '@slime/ui';
import '@slime/ui/style.css';
const app = createApp(App);
app.use(UI);
// Additionally, add the following configuration to tsconfig.json for type hints:
// "types": ["@slime/ui/global.d.ts"]

// Import on demand
import { Button } from '@slime/ui';
import '@slime/ui/style.css';
const app = createApp(App);
app.use(Button);
```

### Utility Functions

```ts
import { isString } from '@slime/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@slime/hooks';
const { count, increment, decrement } = useCounter();
```

### Directives

```ts
import { vFocus } from '@slime/directives';
// Global import
app.directive('focus', vFocus);

// Import on demand
import { vFocus } from '@slime/directives';
app.directive('focus', vFocus);
```

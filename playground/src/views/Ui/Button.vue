<template>
  <a-space>
    <!-- 全局引入测试 -->
    <SButton>按钮</SButton>
    <SButton type="primary">按钮</SButton>
    <SButton type="success">按钮</SButton>
    <SButton type="warning">按钮</SButton>
    <SButton type="danger">按钮</SButton>
    <SButton type="info">按钮</SButton>
  </a-space>
</template>

<script setup lang="ts">
// import { SButton } from '~/@slime/ui'; // 本地实时调试，组件修改代码，立马能看到效果，不需要打包
// import { SButton } from '@slime/ui'; // 从node_modules/@slime/ui/dist/es里面引入的，需要打包ui库
// 导出类型测试
// import type { ButtonProps } from '@slime/ui';
// const buttonProps: ButtonProps = {
//   type: 'primary',
// };
</script>

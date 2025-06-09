/// <reference types="vite/client" />
/// <reference types="ant-design-vue/typings/global.d.ts" />
/// <reference types="@slime/ui/global.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'slime/ui' {
  export * from '@slime/ui';
}

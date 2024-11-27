# 一个基于Turbo、Vue3.5+、TypeScript5+的 Monorepo 组件库模板项目，帮助快速搭建属于自己的组件库🚀

这是一个基于 `Turborepo + Vue 3.5 + TypeScript` 的现代化组件库模板，采用 Monorepo 架构来管理多个包，涵盖了 ESLint、Prettier、Stylelint、Commitlint + Husky + Lint-Staged 和 TypeScript 的项目规范配置。此模板提供了一套完整的开发环境，旨在让开发者能够专注于组件的开发，而无需担心底层配置的复杂性，帮助快速搭建属于自己的组件库（还配备了详情的保姆级注释~）。

## ✨ 特性

- 📦 基于 Monorepo 架构，更好的代码复用和版本管理
- 🚫 强制采用 pnpm 管理依赖，解决幽灵依赖、节省磁盘空间和加快安装速度
- 🚀 使用 Turbo + Vue 3.5 + TypeScript，享受最新技术特性
- 🎨 集成完整的代码规范配置，保证代码质量
- 📚 使用 VitePress 构建文档，支持 Markdown 增强语法
- 🔥 组件库支持按需引入，减小打包体积
- 🎯 完整的类型提示，提升开发体验
- 🛠️ 丰富的工具函数和 Hooks，提高开发效率
- 🔄 支持热更新，提升开发体验
- ⚡️ 基于 Vite/Rollup 构建 ESM 和 CJS 产物

## 📦 项目结构

项目采用 Monorepo 架构，主要包含以下部分：

- `packages/lint-configs`：包含所有配置相关的包，例如 ESLint、Prettier、Stylelint、Commitlint 和 TypeScript 配置。这些配置包确保代码风格的一致性和高质量。
- `packages/hooks`：包含所有自定义 Hooks 的包。
- `packages/directives`：包含所有指令的包。
- `packages/utils`：包含所有工具函数的包。
- `packages/ui`：包含所有 UI 组件的包。
- `apps/docs`：文档应用，使用 Vitepress 构建，提供详尽的组件库文档和使用指南。
- `playground`：演练场，用于测试和演示组件的示例应用，使用 Vite 构建。

此外，项目还包括自动化脚本和持续集成配置，以支持高效的开发流程和质量保证。

## pkg.json相关命令解读

```bash
"dev": "turbo run dev", // 启动所有包的开发环境
"dev:docs": "pnpm -F @mylib/docs run dev", // 启动文档应用
"dev:play": "pnpm -F @mylib/playground run dev", // 启动演练场
"build": "turbo run build", // 构建所有包
"build:docs": "pnpm -F @mylib/docs run build", // 构建文档应用
"lint": "turbo run lint", // 检查所有包的代码
"format": "prettier --write \"**/*.{js,jsx,ts,tsx,mjs,mts,md,vue}\"", // 格式化所有包的代码
"clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist && turbo run clean", // 清理所有包
"deps:update": "pnpm update -r --latest", // 更新所有包的依赖
"deps:check": "pnpm outdated -r", // 检查所有包的依赖
"preinstall": "npx only-allow pnpm", // 确保使用 pnpm 安装依赖
"prepare": "husky install", // 安装 Husky 钩子
"rename-pkg": "bash ./scripts/rename-package.sh" // 一键重命名包，如：@mylib -> @vue3-lib
```

## 🚀 快速开始（演示）

```bash
# @mylib可以通过rename-pkg命令，一键更改为属于自己的包名，如@vue3-lib
pnpm install @mylib/ui @mylib/utils @mylib/hooks @mylib/directives
```

### apps/docs 文档

> 配备了国际化语言切换

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241135445.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241135191.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136925.png)

### playground 演练场

![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136535.png) ![](https://huangmingfu.github.io/drawing-bed/images/pic-go/202411241136209.png)

## 相关链接

> 部分代码和结构设计参考了[Vben5](https://github.com/vbenjs/vue-vben-admin)

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Turborepo](https://turbo.build/repo)
- [Vitepress](https://vitepress.dev/)
- [Vite](https://vitejs.dev/)
- [Vben-admin](https://github.com/vbenjs/vue-vben-admin)

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## License

[MIT](LICENSE)

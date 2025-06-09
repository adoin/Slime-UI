import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en-US',
  title: 'Library Template Doc',
  description: 'A Vue3-based Component Library and Utility Collection',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Others', link: '/markdown-examples' },
      { text: 'Blog', link: 'https://huangmingfu.github.io/my-blog' },
      {
        text: 'More',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/adoin/Slime-UI/blob/master/CHANGELOG.md',
          },
          // {
          //   text: 'Contribute',
          //   link: '',
          // },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Quick Start',
        items: [{ text: 'Introduction', link: 'en/guide/index' }],
      },
      {
        text: 'Components (@slime/ui)',
        items: [
          { text: 'Button', link: 'en/packages/ui/button' },
          { text: 'Dialog', link: 'en/packages/ui/dialog' },
        ],
      },
      {
        text: 'Hooks (@slime/hooks)',
        items: [{ text: 'useCounter', link: 'en/packages/hooks/useCounter' }],
      },
      {
        text: 'Directives (@slime/directives)',
        items: [{ text: 'vFocus', link: 'en/packages/directives/vFocus' }],
      },
      {
        text: 'Utilities (@slime/utils)',
        items: [{ text: 'String Utils', link: 'en/packages/utils/string' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/adoin/Slime-UI' }],
  },
});

module.exports = {
  title: 'vuepress-plugin-image-viewer',
  base: '/vuepress-plugin-image-viewer/',
  plugins: [
    [
      require('../../src'),
      {
        selector: '.theme-default-content', // 你想要的插件起作用的页面的class或id

        options: {
          bgColor: 'black',
          zIndex: 10000,
          excludeClass: 'no-zoom',
        },
        delay: 300,
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/sunnyxujian/vuepress-plugin-image-viewer',
      },
    ],
  },
}

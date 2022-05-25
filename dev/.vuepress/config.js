module.exports = {
  base: '/vuepress-plugin-image-viewer/',
  plugins: [
    [
      require('../../src'),
      {
        selector: '.theme-default-content',

        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
        delay: 300,
      },
    ],
    // 'vuepress-plugin-viewer',
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page', link: '/page.html' },
    ],
  },
}

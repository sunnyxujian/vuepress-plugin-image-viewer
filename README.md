# vuepress-plugin-image-viewer

This plugin will make your images viewer in your VuePress site.  

这个插件会让你的VuePress网站上的图片有便捷的语言效果。

## Get start
### 安装插件
```sh
npm install vuepress-plugin-image-viewer
# or
yarn add vuepress-plugin-image-viewer
```
### 配置VuePress插件
> docs/.vuepress/config.js
```js
module.exports = {
  // ...
  plugins: [
    [
      'vuepress-plugin-image-viewer',
      {
        selector: '.theme-default-content', // 你想要的插件起作用的页面的class或id
         options: {
          excludeClass: 'no-zoom', // 带有这个className的img标签会被排除
        },
      },
    ],
  ]
  // ...
}
```
### Demo
[ Live Demo ](http://xujian.site/vuepress-plugin-image-viewer/)


## options
这个插件基于 [ viewerjs ](https://github.com/fengyuanchen/viewerjs) 这个库封装的，按照他们库的API配置即可。  

[See documentation in viewerjs](https://github.com/fengyuanchen/viewerjs#options)

## Reference

[ viewerjs ](https://github.com/fengyuanchen/viewerjs)
[ vuepress-plugin-zooming ](https://github.com/vuepress/vuepress-community/tree/main/packages/vuepress-plugin-zooming)


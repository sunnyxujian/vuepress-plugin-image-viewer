# vuepress-plugin-image-viewer

## 安装插件
> terminal
```sh
npm install vuepress-plugin-image-viewer
# or
yarn add vuepress-plugin-image-viewer
```
## 配置VuePress插件
> docs/.vuepress/config.js
```js
module.exports = {
  // ...
  plugins: [
    [
      'vuepress-plugin-image-viewer',
      {
        selector: '.theme-default-content', // 你想要的插件起作用的页面的class或id
      },
    ],
  ]
  // ...
}
```
:::tip
点击下方图片查看效果，支持键盘方向键切换及缩放图片。  
如果对你有用请帮忙点个⭐[Star](https://github.com/sunnyxujian/vuepress-plugin-image-viewer)，谢谢~
:::
## Picture 1
![Picture1](https://xj-1253772569.file.myqcloud.com/img/wallhaven-mini.png)
## Picture 2
![Picture2](https://xj-1253772569.file.myqcloud.com/581532.jpg)
## Picture 3
![Picture3](https://xj-1253772569.file.myqcloud.com/126876644.jpg)

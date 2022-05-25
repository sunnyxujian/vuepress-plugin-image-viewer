const path = require('path')

module.exports = ({
  selector = '.theme-default-content img',
  options = {},
  delay = 500,
}) => ({
  name: 'vuepress-plugin-viewer',

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),

  define: {
    VIEWER_SELECTOR: selector,
    VIEWER_OPTIONS: JSON.stringify(options),
    VIEWER_DELAY: delay,
  },
})

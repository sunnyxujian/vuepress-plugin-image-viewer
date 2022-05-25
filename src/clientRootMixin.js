import ViewerPlugin from './ViewerPlugin'

export default {
  watch: {
    '$page.path' () {
      if (this.$vuepress.viewer === 'undefined') return
      this.$vuepress.viewer.updateDelay()
    },
  },

  mounted () {
    this.$vuepress.viewer = new ViewerPlugin()
  },
}

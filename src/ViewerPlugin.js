import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

/* global VIEWER_SELECTOR */
/* global VIEWER_OPTIONS */
/* global VIEWER_DELAY */
const vOptions = JSON.parse(VIEWER_OPTIONS || {})
const vSelector = VIEWER_SELECTOR
const vDelay = Number(VIEWER_DELAY)

export default class ViewerPlugin {
  constructor () {
    if (typeof window !== 'undefined') {
      this.setStyle()
      this.updateDelay()
    }
  }

  update (selector = vSelector) {
    const element = document.querySelector(vSelector)
    if (!element) {
      return console.error('请配置正确的`selector`，例如: `.main .page`。')
    }
    this.instance = new Viewer(element, {
      ...vOptions,
      className: 'viewer-plugin-root',
    })
  }

  updateDelay (selector, delay = vDelay) {
    setTimeout(() => this.update(selector), delay)
  }

  setStyle () {
    const stylee = document.createElement('style')
    stylee.setAttribute('type', 'text/css')
    stylee.innerHTML = `${vSelector} img {
                          cursor: zoom-in;
                        }`
    document.head.appendChild(stylee)
  }
}

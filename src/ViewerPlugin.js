import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import './style.css'

/* global VIEWER_SELECTOR */
/* global VIEWER_OPTIONS */
/* global VIEWER_DELAY */
const vOptions = JSON.parse(VIEWER_OPTIONS || {})
const vSelector = VIEWER_SELECTOR
const vDelay = Number(VIEWER_DELAY)

export default class ViewerPlugin {
  constructor () {
    const element = document.querySelector(vSelector)
    console.log(element)
    if (!element) {
      console.error('请配置正确的`selector`，例如: `.main .page`。')
      return
    }
    this.instance = new Viewer(element, {
      ...vOptions,
      className: 'viewer-plugin-root',
    })
  }

  update (selector = vSelector) {
    if (typeof window === 'undefined') return
    this.instance.update(selector)
  }

  updateDelay (selector, delay = vDelay) {
    setTimeout(() => this.update(selector), delay)
  }
}

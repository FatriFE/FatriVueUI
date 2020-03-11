/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js'

const components = [Button]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.1.0',
  install,
  Button
}

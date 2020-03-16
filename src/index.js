/* Automatically generated by './build/bin/build-entry.js' */

import Input from '../packages/input/index.js';
import Select from '../packages/select/index.js';
import Switch from '../packages/switch/index.js';

const components = [
  Input,
  Select,
  Switch
]

const install = (Vue, opts) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: '1.1.2',
    install,
      Input,
  Select,
  Switch
}

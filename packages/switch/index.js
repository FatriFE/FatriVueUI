import Switch from './src/main'
Switch.install = Vue => {
  Vue.component(Switch.name, Switch)
}
export default Switch

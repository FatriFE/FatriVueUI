import Input from './src/main'
Input.install = Vue => {
  Vue.component(Input.name, Button)
}
export default Input

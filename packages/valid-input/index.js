import ValidInput from './src/main'
ValidInput.install = Vue => {
  Vue.component(ValidInput.name, ValidInput)
}
export default ValidInput

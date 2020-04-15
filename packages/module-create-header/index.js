import ModuleCreateHeader from './src/main'
ModuleCreateHeader.install = Vue => {
  Vue.component(ModuleCreateHeader.name, ModuleCreateHeader)
}
export default ModuleCreateHeader

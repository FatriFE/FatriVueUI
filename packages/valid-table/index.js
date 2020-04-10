import ValidTable from './src/main'
ValidTable.install = Vue => {
  Vue.component(ValidTable.name, ValidTable)
}
export default ValidTable

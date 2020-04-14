import StatusCard from './src/main'
StatusCard.install = Vue => {
  Vue.component(StatusCard.name, StatusCard)
}
export default StatusCard

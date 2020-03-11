/**
 * Created by starlee on 2020/03/09.
 */
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './route.config'
import Fatri from 'main/index'
import hljs from 'highlight.js'
import { ButtonGroup, Icon, Tooltip, Row, Col, Dropdown, DropdownItem, DropdownMenu, Scrollbar, Backtop, Button } from 'element-ui'
// component
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import demoBlock from './components/demo-block'

import './demo-styles/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'

Vue.component(MainHeader.name, MainHeader)
Vue.component(SideNav.name, SideNav)
Vue.component(demoBlock.name, demoBlock)

Vue.use(VueRouter)
Vue.use(Fatri)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Scrollbar)
Vue.use(Backtop)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Icon)
Vue.use(ButtonGroup)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

console.log('vue router', routes)

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  router,
  ...App
}).$mount('#app')

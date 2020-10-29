import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import 'lib-flexible/flexible.js'
import LzjVue from '@'

Vue.use(LzjVue)
new Vue({
  el: '#app',
  render: h => h(App)
})

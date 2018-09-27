import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import $axios from 'axios'

import 'vant/lib/vant-css/index.css'
import './assets/icon/style.css' // 全局引用图标
Vue.prototype.$axios = $axios

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

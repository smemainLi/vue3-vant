import Vue from 'vue'
import App from "./App.vue";
import router from "@/router/router";
import store from "./store/index";
import Vant from "vant";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./assets/css/css.scss";
import '../src/assets/icon/style.css';
import "swiper/dist/css/swiper.css";
import './config/vueUtils.ts';
import Component from 'vue-class-component';
import { openConsoleLog } from "./config/consoleLog"

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

// 只有development环境才打印console.log
/* opeConsoleLog(process.env.NODE_ENV === 'development') */

Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

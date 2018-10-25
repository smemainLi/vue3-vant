import Vue from 'vue'
import App from "./App.vue";
import router from "@/router/router";
import store from "./store";
import Vant from "vant";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./assets/css/css.scss"
import '../src/assets/icon/style.css'
import "swiper/dist/css/swiper.css"
import './config/vueUtils.ts'

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);




Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "./store";
import Vant from "vant";
import "./assets/css/css.scss"

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

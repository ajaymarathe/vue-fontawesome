import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/*font-awesome css*/
import "font-awesome/css/font-awesome.min.css";


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
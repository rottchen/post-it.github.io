import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AnimateCSS from 'animate.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  AnimateCSS,
  render: h => h(App)
}).$mount('#app')

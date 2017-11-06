import Vue from 'vue'
import App from './App'
import router from './router'
import VueResouse from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResouse)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

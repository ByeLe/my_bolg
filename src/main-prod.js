import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from './eventHandle/eventBus.js'
import listenEvent from './eventHandle/listenEvent'
import axios from 'axios'
Vue.prototype.eventBus = eventBus
Vue.use(listenEvent)
axios.defaults.baseURL = 'http://47.103.147.99:7001/'
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

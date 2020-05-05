import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from './eventHandle/eventBus.js'
import listenEvent from './eventHandle/listenEvent'
Vue.config.productionTip = false
Vue.prototype.eventBus = eventBus
Vue.use(listenEvent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

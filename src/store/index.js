import Vue from 'vue'
import Vuex from 'vuex'
import scheme from './scheme.js'
import menus from './menus.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    scheme,
    menus
  }
})

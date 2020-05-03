import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Article'
  },
  {
    path: '/Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/Article',
    component: () => import('@/views/articleCenter/articleCenter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

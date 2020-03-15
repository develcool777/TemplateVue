import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../pages/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/routerLink',
    name: 'routerLink',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    component: () => import('../layout/routerLink.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

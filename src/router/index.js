import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Protected from '../views/Protected.vue'

import store from "@/store" 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },{
    path: 'protected',
    name: 'protected',
    component: Protected
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLoggedIn
  console.log(isLoggedIn)
  to.name === "protected"
    ? !isLoggedIn ? next("/") : next()
    : next()
})

export default router

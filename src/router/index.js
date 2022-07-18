import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import StatsView from '../views/StatsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/Signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/Stats',
    name: 'stats',
    component: StatsView
  },
]

const router = new VueRouter({
  routes
})

export default router

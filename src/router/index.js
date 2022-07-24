import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import StatsView from '../views/StatsView.vue'
import ProfileView from '../views/ProfileView.vue'
import LiveView from '../views/LiveView.vue'

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
  {
    path: '/Profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/Live',
    name: 'Live',
    component: LiveView
  },

]

const router = new VueRouter({
  routes
})

export default router

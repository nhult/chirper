import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { auth: true }
    },
    {
      path: '/signup',
      name: 'Register',
      component: Register
    },
    {
      path: '/signin',
      name: 'Login',
      component: Login
    },
    {
      path: '/reset',
      name: 'NewPassword'
    }
  ]
});

export default router

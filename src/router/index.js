import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/components/LandingPage'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
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
      name: 'ResetPassword'
    }
  ]
})

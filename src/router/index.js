import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import firebase from 'firebase'

import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import NewPassword from '@/components/NewPassword'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true}
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
      name: 'NewPassword',
      component: NewPassword
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router

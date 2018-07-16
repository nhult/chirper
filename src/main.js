// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router/index'
import firebase from 'firebase'
import { firebaseConfig } from './keys/firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.$router.push('/home')
      else this.$router.push('/')
    })
  },
  store,
  router,
  components: { App },
  template: '<App/>'
})

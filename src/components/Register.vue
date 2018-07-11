<template>
  <div class="Register">
    <div class="Register__form">
      <h2>Register</h2>
      <input type="email" placeholder="Email" v-model="registerEmail" />
      <input type="password" placeholder="Password" v-model="registerPassword" />
      <input type="password" placeholder="Repeat password" v-model="registerPassword2" />
      <button type="button" @click="signUp()">Register</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data () {
    return {
      registerEmail: '',
      registerPassword: '',
      registerPassword2: ''
    }
  },
  methods: {
    signUp: function() {
      if(this.registerPassword !== this.registerPassword2) {
        alert("Passwords do not match."); return false;
      }

      firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword).then(
        function(user) {
          alert("Success.")
        },
        function(err) {
          alert(err.message)
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

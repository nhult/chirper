<template>
  <div class="Register">
    <Header />
    <div class="Register__modal-background"></div>
    <div class="Register__modal-content">
      <div class="Register__form">
        <div class="Register__form-header">
          <img src="../assets/icons8-twitter-50.png" />
          <!-- <button type="button">Next</button> -->
        </div>

        <div class="Form__credentials" v-bind:class="{ active: isActive }">
          <h2>Create your account</h2>
          <input type="text" placeholder="Name" v-model="registerName" v-on:keyup="__inputKeyPress" />
          <input type="email" placeholder="Email" v-model="registerEmail" v-on:keyup="__inputKeyPress" />
          <input type="password" placeholder="Password" v-model="registerPassword" v-on:keyup="__inputKeyPress" />
          <input type="password" placeholder="Repeat password" v-model="registerPassword2" v-on:keyup="__inputKeyPress" />

          <span>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. You also agree that you’re over 13 years of age.</span>
          <button type="button" class="Register__button" @click="signUp()">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from '@/components/Header'

export default {
  name: 'Register',
  components: {
    Header
  },
  data () {
    return {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      registerPassword2: '',

      isActive: false
    }
  },
  methods: {
    signUp: function() {
      if(this.registerPassword !== this.registerPassword2) {
        alert("Passwords do not match."); return false;
      }

      firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword).then(
        function(user) {
          alert("Register successful! Welcome to Chirper!")
        },
        function(err) {
          alert(err.message)
        }
      );
    },
    __inputKeyPress: function(event) {
      if (event.key === 'Enter') if (event.key === 'Enter') this.signUp();
    }
  }
}
</script>

<style lang="scss" scoped>
.active { background: red; }

.Register {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.Register__modal-background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 1;
  background: #000;
  opacity: .25;
}
.Register__modal-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.Register__form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  z-index: 2;
  width: 36rem;
  height: 40rem;
  background: #fff;
  border-radius: 3px;

  & .Register__form-header {
    height: 3rem;
    width: 90%;

    & img {
      width: 2rem;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    & button {
      width: 4rem;
      height: 1.9rem;
      border: 1px solid rgba(9, 132, 227, .9);
      border-radius: 20px;
      background: rgba(9, 132, 227, .8);
      cursor: pointer;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
      opacity: .5;
      float: right;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.Form__credentials {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;

  & input {
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1.6rem;

    & {
      margin-bottom: 10px;

      &:focus {
        margin-bottom: 10px;
      }
    }

    &:focus {
      border-bottom: 2px solid rgba(9, 132, 227, .9);
      outline: none;
    }
  }
  & span {
    margin-top: 70px;
    color: #636e72;
  }
  & .Register__button {
    margin: 20px auto;
    width: 90%;
    height: 1.9rem;
    border: 1px solid rgba(9, 132, 227, .9);
    border-radius: 20px;
    background: rgba(9, 132, 227, .8);
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    opacity: 1;
  }
}
</style>

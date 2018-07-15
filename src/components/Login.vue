<template>
  <div class="Login">
    <Header />

    <div class="Login__container">
      <div class="Login__form">
        <h2>Log in to Chirper</h2>
        <input type="email" placeholder="Email" v-model="loginEmail" v-on:keyup="__inputKeyPress" />
        <input type="password" placeholder="Password" v-model="loginPassword" v-on:keyup="__inputKeyPress" />
        <div>
          <button type="button" class="Login__button" @click="signIn()">Log in</button>
          <!-- <input type="checkbox">Remember me</input> -->
          <router-link to="/reset"><a>Forgot password?</a></router-link>
        </div>
      </div>
      <div class="Login__footer">
        <span>New to Chirper? <router-link to="/signup"><a>Sign up now »</a></router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from '@/components/Header'

export default {
  name: 'Login',
  components: {
    Header
  },
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword).then(
        function(user) {
          alert("Success.")
        },
        function(err) {
          alert(err.message)
        }
      );
    },
    __inputKeyPress: function(event) {
      if (event.key === 'Enter') if (event.key === 'Enter') this.signIn();
    }
  }
}
</script>

<style lang="scss" scoped>
.Login {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background: rgba(178, 190, 195, .2);
  width: 100vw;
  height: 100vh;

  & a { cursor: pointer; color: blue; }
}
.Login__container {
  display: grid;
  grid-template-columns: 10% 40% 50%;
  grid-template-rows: 5% 60% 35%;

  margin-top: 10px;
  border: 1px solid #ccc;
  width: 51rem;
  height: 22rem;
  background: #ffffff;

  & .Login__form {
    grid-column-start: 2;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    width: 20rem;
    height: 12.5rem;

    & a {
      grid-column-start: 2;
      text-align: left;
      color: #ccc;
      font-size: 0.85rem;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    & input[type="email"], input[type="password"] {
      margin: .2rem 0;
      width: 18rem;
      padding: 0.4rem;
      border: 1px solid rgba(99, 110, 114, .2);
      border-radius: 2px
    }
    & input[type="checkbox"] {
      font-size: 4rem;
    }
    & button {
      width: 5rem;
      height: 2.2rem;
      border: 1px solid rgba(9, 132, 227, .9);
      border-radius: 20px;
      background: rgba(9, 132, 227, .8);
      color: white;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: rgba(9, 132, 227, 1);
      }
    }
    & div {
      margin-top: auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    & span {
      font-size: 0.8rem;
    }
  }

  .Login__footer {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    background: rgba(178, 190, 195, .12);

    & span {
      font-size: 2rem;
    }
  }
}
</style>

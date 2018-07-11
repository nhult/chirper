<template>
  <div class="Login">
    <Header />

    <div class="Login__container">
      <div class="Login__form">
        <h2>Log in to Chirper</h2>
        <input type="email" placeholder="Email" v-model="loginEmail" />
        <input type="password" placeholder="Password" v-model="loginPassword" />
        <div>
          <button type="button" class="Login__button" @click="signIn()">Log in</button>
          <span>REMEMBERME</span>
          <router-link to="/reset"><a>Forgot password?</a></router-link>
        </div>
      </div>
      <div class="Login__footer">
        <span>New to Twitter? <router-link to="/signup"><a>Sign up now »</a></router-link></span>
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

  & a { cursor: pointer; color: blue; }
}
.Login__container {
  display: grid;
  grid-template-columns: 10% 40% 50%;
  grid-template-rows: 5% 60% 35%;

  margin-top: 10px;
  border: 1px solid #ccc;
  width: 50rem;
  height: 22rem;

  & .Login__form {
    grid-column-start: 2;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    width: 20rem;
    height: 12.5rem;

    & input {
      margin: .2rem 0;
      width: 18rem;
      padding: 0.4rem;
      border: 1px solid rgba(99, 110, 114, .2);
      border-radius: 2px
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

      &:focus {
        outline: 0;
      }
      &:hover {
        background: rgba(9, 132, 227, 1);
      }
    }
    & div {
      margin-top: auto;
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
    background: rgba(178, 190, 195, .2);

    & span {
      font-size: 2rem;
    }
  }
}
</style>

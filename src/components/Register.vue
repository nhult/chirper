<template>
  <div class="Register">
    <Header />
    <div class="Register__modal-background"></div>
    <div class="Register__modal-content">
      <div class="Register__form">
        <div class="Register__form-header">
          <img src="../assets/icons8-twitter-50.png" />
          <button type="button">Next</button>
        </div>

        <div class="Form__step-credentials" v-bind:class="{ active: isActive }">
          <h2>Create your account</h2>
          <input type="text" placeholder="Name" v-model="registerName" />
          <input type="email" placeholder="Email" v-model="registerEmail" />
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

      isActive: true,
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
.active {background: red;}

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

      &:focus {
        outline: 0;
      }
    }
  }
}

.Form__step-credentials {
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

    &:nth-child(2) {
      margin-bottom: 10px;

      &:focus {
        margin-bottom: 10px;
      }
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid rgba(9, 132, 227, .9);
    }
  }
}
</style>

<template>
  <div class="LandingPage">
    <div class="LandingPage-Left">
      <div class="Introduction">
        <span>Follow your interests.</span>
        <span>Hear what people are talking about.</span>
        <span>Join the conversation.</span>
      </div>
    </div>

    <div class="LandingPage-Right">
      <div class="Login__form">
        <input type="email" placeholder="Email address" v-model="loginEmail" />
        <input type="password" placeholder="Password" v-model="loginPassword" />
        <input type="submit" value="Log in" class="Login__button" @click="signIn()" />
        <router-link to="/reset"><a>Forgot password?</a></router-link>
      </div>
      <div class="Sign__container">
        <div class="Sign__header">
          <img src="../assets/icons8-twitter-50.png"></img>
          <button type="button" class="Login__button" @click="signIn()">Log in</button>
        </div>
        <h1>See what’s happening in the world right now</h1>
        <div class="Sign__selection">
          <span>Join Twitter today.</span>
          <button type="button" @click="redirect('/signup')">Sign Up</button>
          <button type="button" @click="redirect('/signin')">Log in</button>
        </div>
      </div>
    </div>

    <div class="LandingPage__footer">
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'LandingPage',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    redirect: function(path) { this.$router.push(path) },

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
.LandingPage {
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: 95vh 5vh;

  width: 100vw;
  height: 100vh;
}
.LandingPage-Left {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 50vw;
  height: 100%;

  background: rgba(9, 132, 227, .9);

  & .Introduction {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: left;
    height: 12rem;

    color: white;
    font-size: 1.8em;

    width: 20rem;
    height: 17rem;

    & span {
      margin: 20px 0;
    }
  }
}
.LandingPage-Right {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: calc(50% - 8.5rem);

  width: 50vw;
  height: 100%;
  background: #ffffff;

  & .Login__button {
    width: 5rem;
    background: Transparent;
    font-weight: bold;
    color: rgba(9, 132, 227, .9);
    border: 1px solid rgba(9, 132, 227, .9);
    border-radius: 30px;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
    &:hover {
      background: rgba(9, 132, 227, .1);
    }
  }
  & .Login__form {
    grid-column-start: 2;
    grid-row-start: 1;

    display: grid;
    grid-template-columns: 11.25rem 11.25rem 5rem;
    grid-template-rows: 45px 15px;
    column-gap: 2rem;
    row-gap: 0.4rem;
    width: 31.5rem;
    height: 4.15rem;
    margin-top: 2rem;

    & input[type="email"], input[type="password"] {
      width: 11.25rem;
      padding: 0.6rem;
      border: 1px solid rgba(99, 110, 114, .2);
      border-radius: 2px;
    }
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
  }
  & .Sign__container {
    grid-column-start: 2;
    grid-row-start: 2;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    width: 20rem;
    height: 17rem;
    min-height: 17rem;

    & h1 {
      text-align: left;
      font-size: 1.7em;
    }
    & .Sign__header {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      & button {
        width: 3.75rem;
        height: 2.25rem;
        visibility: hidden;
      }
    }
    & .Sign__selection {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 8rem;

      & span {
        font-weight: bold;
        font-size: 1.2em;
        text-align: left;
        margin-right: auto;
      }
      & button {
        width: 100%;
        height: 2rem;
        border: 1px solid rgba(9, 132, 227, .9);
        border-radius: 20px;
        background: rgba(9, 132, 227, .8);
        cursor: pointer;

        &:focus {
          outline: 0;
        }
        &:hover {
          background: rgba(9, 132, 227, 1);
        }
      }
      & button:last-child {
        background: transparent;

        &:hover {
          background: rgba(9, 132, 227, .2);
        }
      }
    }
  }
}
.LandingPage__footer {
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 3;

  border-top: 1px solid #ccc;
}


/* \__________________LET THE QUERIES BEGIN__________________/ */



@media screen and (max-width: 1450px) {
  .LandingPage-Right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: calc(50% + 8.5rem);
  }
}

@media screen and (max-width: 1050px), screen and (max-height: 600px) {
  .Login__form {
    visibility: hidden;
  }
  .Sign__header button {
    visibility: visible !important; /* Though not good practice, it is merely visual. */
  }
}

@media screen and (max-width: 800px) {
  .LandingPage {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    min-height: 100vh;
  }
  .LandingPage-Left {
    order: 5;
    width: 100vw;
    height: 14rem;
    min-height: 14rem;
  }
  .LandingPage-Right {
    order: 1;
    width: 100vw;
    height: 20rem;
    min-height: 20rem;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    & .Login__form {
      display: none;
    }
    & .Sign__container {
      margin-top: 20px;
    }
  }
  .LandingPage__footer {
    order: 10;
    margin-top: auto;
    width: 100vw;
    min-height: 55px;
  }
}
@media screen and (max-height: 400px) {
  .LandingPage-Right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;

    & .Login__form {
      display: none;
    }
    & .Sign__container {
      margin-top: 0;
    }
  }
}
</style>

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
        <input type="submit" value="Log in" class="Login__button" />
        <a href="reset_password">Forgot password?</a>
      </div>
      <div class="Sign__container">
        <div class="Sign__header">
          <span>CHIRP_LOGO</span>
          <button type="button" class="Login__button">Log in</button>
        </div>
        <h1>See what’s happening in the world right now</h1>

        <div class="Sign__selection">
          <span>Join Twitter today.</span>
          <button type="button">Sign Up</button>
          <button type="button">Log in</button>
        </div>
      </div>
    </div>

    <div class="LandingPage__footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
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
    justify-content: space-between;
    text-align: left;
    height: 15rem;

    color: white;
    font-size: 2em;
  }
}
.LandingPage-Right {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 35% 90%;

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
    height: 37.25rem;
  }
}

@media screen and (max-width: 1050px) {
  .Login__form {
    visibility: hidden;
  }
  .Sign__header button {
    visibility: visible !important; /* Though not good practice, it is merely visual. */ 
  }
}
</style>

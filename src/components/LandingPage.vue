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
      <div class="Login-Form">
        <input type="email" placeholder="Email address" v-model="loginEmail" />
        <input type="password" placeholder="Password" v-model="loginPassword" />
        <input type="submit" value="Log in" />
        <a href="reset_password">Forgot password?</a>
      </div>
      <div class="Sign-Selection">
      </div>
    </div>

    <div class="LandingPage-Footer">
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

  & .Introduction {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 20%;

    color: white;
    font-size: 2em;
    text-align: left;
  }

  background: rgba(9, 132, 227, .9);
}
.LandingPage-Right {
  width: 50vw;
  height: 100%;
  background: #ffffff;

  & .Login-Form {
    display: grid;
    grid-template-columns: 30% 200px 200px 100px;
    grid-template-rows: 45px;
    column-gap: 15px;
    row-gap: 5px;
    margin: 40px 0 0 0;

    & input[type="email"] {
      grid-column-start: 2;
    }
    & input[type="email"], input[type="password"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 2px;
    }
    & input[type="submit"] {
      width: 80px;
      background: Transparent;
      font-weight: bold;
      color: rgba(116, 185, 255,1.0);
      border: 1px solid rgba(116, 185, 255,1.0);
      border-radius: 30px;
      cursor: pointer;

      &:hover {
        background: rgba(116, 185, 255, .15);
      }
    }
    & a {
      grid-column-start: 3;
      opacity: .7;
      text-align: left;
    }
  }
}
.LandingPage-Footer {
  width: 100%;

  grid-column-start: 1;
  grid-column-end: 3;

  border-top: 1px solid #ccc;
}
</style>

<template>
  <div class="Home">
    <div class="Header">
      <div class="Header__nav-home" @click="redirect('/home')">
        <span>Home</span>
      </div>
      <div class="Header__nav-notifications">
        <span>Notifications</span>
      </div>
      <div class="Header__nav-messages">
        <span>Messages</span>
      </div>
      <img src="../assets/icons8-twitter-50.png"></img>
      <input type="text" placeholder="Search Chirper" v-model="inputValue" v-on:keyup="__inputKeyPress" />
      <div class="Header__nav-profile">
        <img src="../assets/icons8-customer-64.png" @click="profileModal__toggle()"></img>
        <div class="Profile__modal" v-show="profileModal">
          <div>
            <span>__PROFILE_NAME</span>
            <span>Profile</span>
          </div>
          <hr />
          <div>
            <span>Settings</span>
            <span @click="signOut()">Log out</span>
          </div>
          <hr />
          <div>
            <span>Night mode</span>
          </div>
        </div>
      </div>
      <button>Tweet</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data() {
    return {
      inputValue: '',
      profileModal: false
    }
  },
  methods: {
    redirect: function(path) { this.$router.push(path) },
    signOut: function() {
      firebase.auth().signOut().then(function() {
        console.log("Successfully signed out!");
      }).catch(function(error){
        console.log("Error signing out", error);
      })
    },
    profileModal__toggle: function() { this.profileModal = !this.profileModal },
    searchValue: function() {
      alert(this.inputValue)
    },
    __inputKeyPress: function(event) {
      if (event.key === 'Enter') this.searchValue();
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.Header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 40px;
  box-shadow: 0 3px 1px -2px #ccc;
  /* overflow: hidden; */
  background: #ffffff;

  user-select: none;
  font-weight: bold;
  font-size: 0.9rem;
  color: rgba(99, 110, 114, .85);

  & input[type="text"] {
    width: 12rem;
    height: 1.5rem;
    border-radius: 1rem;
    padding-left: 10px;

    background: url(../assets/icons8-search-50-ccc.png) no-repeat scroll 7px 0;
    background-size: 20px;
    background-position: 95% 50%;
  }

  & .Header__nav-home {
    margin-left: 50px;
  }
  & img {
    margin-left: auto;
    width: 2rem;
    margin: 0 50px;
    cursor: pointer;
  }
  & button {
    margin: 0 25px 0 auto;
    width: 4.5rem;
    height: 2.1rem;
    border: 1px solid rgba(9, 132, 227, .7);
    border-radius: 20px;
    background: rgba(9, 132, 227, .7);
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 0.95em;
    &:hover {
      background: rgba(9, 132, 227, .8);
    }
  }
  & input {
    margin-left: auto;
  }

  & .Header__nav-home, .Header__nav-notifications, .Header__nav-messages {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 20px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid rgba(9, 132, 227, 1);
      transition: all .2s;
      color: rgba(9, 132, 227, 1);
    }
  }


  & .Header__nav-profile {
    position: relative;
    width: 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    & img {
      width: 100%;
      cursor: pointer;
    }

    & .Profile__modal {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      position: absolute;
      width: 12rem;
      top: 3rem;
      right: 0;
      background: rgba(127, 143, 166,.15);
      z-index: 10;
      border-radius: 3px;
      -webkit-box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
      -moz-box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
      box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);

      & hr {
        margin: 0;
        width: 100%;
        opacity: .5;
      }
      & div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        cursor: pointer;

        & span {
          width: 100%;
          height: 2rem;
        }
        & span:hover {
          background: rgba(9, 132, 227, .7);
          color: #fff;
        }
      }
    }
  }
}
</style>

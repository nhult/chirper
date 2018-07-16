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
      <input />
      <div class="Header__nav-profile">
      </div>
      <button>Tweet</button>
    </div>

    <button @click="signOut()">Log out</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  methods: {
    signOut: function() {
      firebase.auth().signOut().then(function() {
        console.log("Successfully signed out!");
      }).catch(function(error){
        console.log("Error signing out", error);
      })
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
  overflow: hidden;
  background: #ffffff;

  user-select: none;
  font-weight: bold;
  font-size: 0.9rem;
  color: rgba(99, 110, 114, .85);


  & .Header__nav-home {
    margin-left: 50px;
  }
  & img {
    width: 2rem;
    margin: 0 50px;
    cursor: pointer;
  }
  & button {
    width: 5rem;
    height: 2rem;
    border: 1px solid rgba(9, 132, 227, .9);
    border-radius: 20px;
    background: rgba(9, 132, 227, .7);
    cursor: pointer;
    color: white;
    font-weight: bold;
    &:hover {
      background: rgba(9, 132, 227, 1);
    }
  }

  & div {
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
}
</style>

<template>
  <div class="Header">
    <div class="Header__nav-home" @click="redirect('/')">
      <img src="../assets/icons8-twitter-50.png"></img>
      <span>Home</span>
    </div>
    <div class="Header__nav-about">
      <span>About</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    redirect: function(path) { this.$router.push(path) }
  }
}
</script>

<style lang="scss" scoped>
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
    margin-left: 250px;

    & img {
      width: 2rem;
      margin-right: 10px;
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

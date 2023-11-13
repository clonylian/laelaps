<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  <router-view />


  
</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
.hkzEld{
  transition: opacity 0.1s ease-in-out 0s;
    text-align: center;
    position: fixed;
    width: 100vw;
    height: 100vh !important;
    top: 0px !important;
    left: 0% !important;
    z-index: 2;
    will-change: opacity;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1 !important;
    visibility: visible;
    pointer-events: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
.doneshow {
  display: block !important;
}
.done {
  display: none;
}
.donebox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
}
.donecon {
  width: 25%;
  height: auto;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-sizing: border-box;
}
.donedian {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 3rem;
}
.donedian span {
  margin: 0 0.3125rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: black;
}
.donecon h4 {
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  margin: 4rem 0 0.25rem;
}
.donecon > p {
  width: 100%;
  margin-bottom: 0.25rem !important;
  text-align: center;
  font-size: 1.2rem !important;
  font-weight: 800;
}
.donecon > span {
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 600;
}
@media (max-width: 1250px) {
  .donecon {
    width: 90%;
  }
}

*{
  margin: 0 !important;
 
}
body{
  background-color: rgb(204, 182, 145);
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

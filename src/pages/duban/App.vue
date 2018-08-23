<template>
  <div id="app">
    <img src="./assets/logo.png">
    v1
    <!-- <hello></hello> -->
    <router-view/>
  </div>
</template>

<script>
import hello from '../../components/HelloWorld'
import {getInfo} from './api/index.js'
export default {
  name: 'App',
  components: {
    hello
  },
  created () {
    getInfo().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

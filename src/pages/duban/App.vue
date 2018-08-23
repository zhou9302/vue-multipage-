<template>
  <div id="app">
123
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

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

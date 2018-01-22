<template>
  <div id="app">
    <img v-lazy="`/static/test.${extjpg}`"/>
    <img :src="'/static/logo.'+ext"/>
    <img :src="`/static/logo.${ext}`"/>
    <router-view/> <!--  一级路由，载体 -->
    <router-view name='Test'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      ext: 'png',
      extjpg: 'jpg'
    }
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
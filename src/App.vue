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

import obj from './util'
import {getCookie} from './util'
console.log(obj,'obj',getCookie)

// 使用Vue.observable 响应式数据变化，当store使用


export default {
  name: 'app',
  data(){
    return{
      ext: 'png',
      extjpg: 'jpg'
    }
  },
  created(){
    this.getPromise(['/api/address','/api/goods'])
  },
  methods:{
    // async getPromise(dataSet){
    //   const pokemonPromises = dataSet.map(urlItem => {
    //       return this.axios.get(`${urlItem}`)
    //   })

    //   console.log(pokemonPromises,'pokemonPromises')
    //   const results = await Promise.all(pokemonPromises)

    //   console.log(results,'results')
    // }

    async getPromise(dataSet){
      const pokemonPromises = dataSet.map(urlItem => {
          return this.axios.get(`${urlItem}`)
      })

      console.log(pokemonPromises,'pokemonPromises')
      const results = await Promise.all(dataSet.map(urlItem => {
          return this.axios.get(`${urlItem}`)
      }))

      console.log(results,'results')
    },
    promiseTest(){

      function a(){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(1)
          },1000)
        })
      }

      function b(){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(2)
          },2000)
        })
      }

      Promise.all([a(),b()]).then((d)=>{
        console.log(d,'ddd')   //  [1, 2] "ddd"  (Promise.all里面放的数组，函数要运行)
      })

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
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

    let MyWorker = require("worker-loader!./work/1.work.js");
    let worker = new MyWorker();
    worker.postMessage({a: 1});
    worker.onmessage = function(event) { /* 操作 */
      console.log('work线程发送的消息', event.data)
    };
    
    worker.addEventListener("message", function(event) { /* 操作 */ });

    worker.addEventListener('error', function (e) {
      // Worker 内部的 js 在执行过程中只要遇到错误，就会触发 error 事件。
      // 发生 error 事件时，事件对象中包含三个属性：filename, lineno 和 message，
      // 分别表示发生错误的文件名、代码行号和完整的错误消息。
    });

    // 终止工作线程
    // worker.terminate();
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
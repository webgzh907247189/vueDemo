<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Test :text-num='num' @addNumAdd='showNum' v-on:reduceNumReduce='jianNum' :text-arr= 'arr' desNum='20' placeholder="请填写表单($attrs继承)"></Test>
    <Brother></Brother>
    <div>
      <p v-on:click='jump'>this.$router.push() 跳转到嵌套路由(嵌套路由的父组件)</p>
      <router-link v-bind:to="{name: 'TextDes',params: {id: 99999999}}">跳转到嵌套路由(嵌套路由的父组件)</router-link>
      <router-link v-bind:to="{name: 'TestTwo',params: {id: 99999999}}">静态资源测试 路由 TestTwo</router-link>
      <!-- <router-link :to="{name: 'TextDes',params: {id: 99999999}}">跳转到嵌套路由(嵌套路由的父组件)</router-link> -->
    </div>
     <div v-if="Math.random()>0.5">afdfdsg g</div>
     <div v-else>AAAAAA</div>
    <page-test>
      <div  slot='bread'>插槽测试</div>
      <div  slot='bread'>可扩展</div>
      <div  slot='1111bread'>插槽名字不一样{{a}}</div>
    </page-test>
  </div>
</template>

<script>
import Test from './Test'
import Brother from './Brother'
import PageTest from './PageTest'
import {getUtilFn} from '@/util'
import dayjs from 'dayjs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: [{name: 'aa'},{name: 'bb'},{name: 'cc'}],
      num: '10'
    }
  },
  computed: {
    a(){
      let {test,test2} = getUtilFn(['test','test2'], (item, cip)=>{
        return cip(require(`@/bus/${item}.js`))
      })
      console.log(test,'ccccccc',test2)

      let {find,forEach} = getUtilFn(['find','forEach'], (item, cip)=>{
        return cip(require('lodash/'+item))
      })

    
      console.log(find,'bbb',forEach)

      var users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
      
      let r1 = find(users, function(o) { return o.age < 40; });
      console.log(r1,'r1')

      forEach(users, function(value) {
        console.log(value);
      });
  
      window.dayjs = dayjs
      return dayjs().format();
    }
  },
  methods: {
    showNum(){
      // this.num++,

      this.$set(this.arr,1, {
        name: '11'
      })
      // this.arr[1] = {name: '11'}

      console.log(this.arr,'?')
    },
    jianNum(){
      this.num--
    },
    jump(){
      this.$router.push({path: '/textdes/566',query: {name: '111'}})
    }
  },
  components: {
    Test,
    Brother,
    PageTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

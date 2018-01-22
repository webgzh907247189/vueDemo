<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Test :text-num='num' @addNumAdd='function(){num++}' v-on:reduceNumReduce='jianNum' :text-arr= 'arr' desNum='20'></Test>
    <Brother></Brother>
    <div>
      <p v-on:click='jump'>this.$router.push() 跳转到嵌套路由(嵌套路由的父组件)</p>
      <router-link v-bind:to="{name: 'TextDes',params: {id: 99999999}}">跳转到嵌套路由(嵌套路由的父组件)</router-link>
      <!-- <router-link :to="{name: 'TextDes',params: {id: 99999999}}">跳转到嵌套路由(嵌套路由的父组件)</router-link> -->
    </div>
     <div v-if="Math.random()>0.5">afdfdsg g</div>
     <div v-else>AAAAAA</div>
    <page-test>
      <div  slot='bread'>插槽测试</div>
      <div  slot='bread'>可扩展</div>
      <div  slot='1111bread'>插槽名字不一样</div>
    </page-test>
  </div>
</template>

<script>
import Test from './Test'
import Brother from './Brother'
import PageTest from './PageTest'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr: ['aa','bb','cc'],
      num: '10'
    }
  },
  methods: {
    showNum(){
      this.num++
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

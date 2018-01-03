<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Test :text-num='num' v-on:addNumAdd='showNum' v-on:reduceNumReduce='jianNum' :text-arr= 'arr' desNum='20'></Test>
    <Brother></Brother>
    <div>
      <p @click='jump'>this.$router.push() 跳转到嵌套路由</p>
    </div>
  </div>
</template>

<script>
import Test from './Test'
import Brother from './Brother'

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
    Brother
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

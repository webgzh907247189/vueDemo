<template>
  <div class="hello">
      <p>父组件传递数据：{{desNum}}</p>
      <p>{{$route.params.id}}</p>
      <p>{{$route.params.name}}</p>
      <button @click='jump'>jump(跳转到首页)</button>
      <div>
        <p><router-link to='/textdes/566/children'>router-link跳转到嵌套路由 children</router-link></p>
        <p><router-link to='/TestTwo'>router-link跳转到嵌套路由 TestTwo</router-link></p>
        <p @click='jumpTwo'>this.$router.push() 跳转到嵌套路由children-two</p>
      </div>
      <router-view></router-view>  <!-- 路由载体,因为存在子路由，所以需要路由载体 -->
  </div>
</template>

<script>
export default {
  name: 'TextDes',
  data(){
    return {
      desNum: '路由测试',
      id: '测试'
    }
  },
  methods: {
    jump(){
      this.$router.push({path: '/',query: {a: 1,b: 2}})
    },
    jumpTwo(){
      this.$router.push({path: '/textdes/566/children-two',query: {a: 1,b: 2}})
    }
  }
}
</script>


<style scoped>

</style>

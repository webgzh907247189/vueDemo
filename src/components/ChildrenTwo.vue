<template>
  <div class="hello">
      <p>
        childrenTwo路由
        <p>解析路由参数{{$route.query}}</p>
        <router-link to='/'>router-link跳转 嵌套路由two  (跳转到首页)</router-link>
        <div @click='goJump'>$router.go()跳转</div>
      </p>
  </div>
</template>

<script>
export default {
  name: 'ChildrenTwo',
  data(){
    return {
      desNum: '0'
    }
  },
  methods: {
    goJump(){
      this.$router.go(-1)
    }
  }
}
</script>


<style scoped>
.hello{
  margin-top:60px;
}
</style>

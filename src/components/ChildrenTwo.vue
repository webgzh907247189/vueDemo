<template>
  <div class="hello">
      <p>
        childrenTwo路由
        <router-link to='/'>router-link跳转 嵌套路由two</router-link>
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
  mounted() {
  }
}
</script>


<style scoped>
.hello{
  margin-top:60px;
}
</style>

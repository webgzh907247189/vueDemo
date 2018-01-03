<template>
  <div class="hello">
      <p>
        children路由
        <router-link to='/'>router-link 跳转嵌套路由</router-link>
      </p>
  </div>
</template>

<script>
export default {
  name: 'Children',
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

<template>
  <div class="hello">
      <p>兄弟组件传递数据:{{desNum}}</p>
  </div>
</template>

<script>
import Bus from '@/bus/bus.js'
export default {
  name: 'Brother',
  data(){
    return {
      desNum: '0'
    }
  },
  mounted() {
    Bus.$on('brother',(desNum)=>{
      console.log(desNum)
      this.desNum = desNum--
    })
  }
}
</script>


<style scoped>

</style>

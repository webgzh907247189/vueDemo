<template>
  <div class="hello">
      <ul>
        <li v-for='item in textArr'>{{item}}</li>
        <input v-bind="$attrs"/>
      </ul>
      <p>父组件传递数据：{{desNum}}</p>
      <p>{{textNum}}textNum</p>
      <button @click='addNum'>+(自增)</button>
      <button v-on:click='giveBrother'>-</button>
  </div>
</template>

<script>
import Bus from '@/bus/bus.js'
export default {
  name: 'Test',
  props: {
    textNum: String,
    textArr: Array,
    desNum: String
  },
  methods: {
    addNum(){
      this.$emit('addNumAdd')
    },
    giveBrother(){
      Bus.$emit('brother',this.textNum)
    },
    reduceNum(){
      this.$emit('reduceNumReduce')
    }
  }
}
</script>


<style scoped>

</style>
<template>
  <div class="hello">
      <div style="color:red">数据实时性测试 -> {{test}}</div>
      <div style="color:green">数据实时性测试 -> {{test2}}</div>
      <ul>
        <li v-for='item in textArr'>{{item.name}}</li>
        <input v-bind="$attrs" v-model="test"/>
        <input @input="inputEvent"/>


        <select v-model="selectModel">
          <option>css</option>
          <option value="js">javaScript</option>
          <option value="html">html</option>
        </select>

        <select v-model="selectModel">
          <option v-for="item of selectModelArr">{{item}}</option>
        </select>

        <select v-model="selectModelMultiple" multiple @change="change">
          <option v-for="item of selectModelArr">{{item}}</option>
        </select>

        <div>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
          <div>var a = (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/)</div>
          <input type="radio" v-model="radioPicked" :value="radioValue">
          <label>单选按钮测试</label>
          <p>radioPicked -> {{radioPicked}}</p>
          <p>radioValue -> {{radioValue}}</p>
        </div>

        <div>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
          <input type="checkbox" v-model="checkToggle" :true-value="checkTrueValue" :false-value="checkFalseValue">
          <label>复选框按钮测试</label>
          <p>checkTrueValue  -> {{checkTrueValue}}  | checkToggle -> {{checkToggle}}</p>
          <p>checkFalseValue -> {{checkFalseValue}} | checkToggle -> {{checkToggle}}</p>
        </div>


        <div>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
          <select v-model="selected">
            <option :value="{ number: 456 }">123</option>
          </select>
          <label>select 按钮测试</label>
          <p>selected  ->  {{selected}}</p>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        </div>

      </ul>
      <p>父组件传递数据：{{desNum}}</p>
      <p>{{textNum}}textNum</p>
      <button @click='addNum'>+(自增)</button>
      <button v-on:click='giveBrother'>-</button>
  </div>
</template>

<script>
import Bus from '@/bus/bus.js'

var minxin =  {
  created(){
    console.log('这是mixin的函数')
  },
  methods: {
    addNum(){
      console.log('mixin的数据')
    }
  }
}

export default {
  name: 'Test',
  props: ['textNum','textArr','desNum'],
  mixins: [minxin],
  created(){
    console.log('这是组件的函数')
  },
  data(){
    return {
      test: '',
      test2: '',
      selectModel: 'js',
      selectModelArr : ['css','js','html'],
      selectModelMultiple: ['css','js'],

      radioPicked: false,
      radioValue: 123,

      checkToggle: false,
      checkTrueValue: 'a',
      checkFalseValue: 'b',

      selected: ''
    }
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
    },
    inputEvent(e){
      this.test2 = e.target.value
    },
    change(){
      console.log(this.selectModelMultiple,'多选的selcet')
    }
  }
}
</script>


<style scoped>

</style>
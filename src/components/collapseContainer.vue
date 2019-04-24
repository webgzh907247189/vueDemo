<template>
  <div class="hello">
      <collapse v-model="value">
        <pane name="1">
            姓名
            <p slot="content"> 这个人的介绍111</p>
        </pane>
        <pane name="2">
            性别
            <p slot="content"> 这个人的性别222</p>
        </pane>
        <pane name="3">
            年龄
            <p slot="content"> 年龄介绍333</p>
        </pane>
      </collapse>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'collapseContainer',
  data(){
    return {
      value: 1
    }
  },
  methods: {
  }
}

Vue.component('pane',{
    template: `
        <div class="pane">
            <div class="header" @click="toggle">
                <slot></slot>
            </div>
            <div class="content" v-show="paneShow">
                <slot name="content"></slot>
            </div>
        </div>
    `,
    props: ['name'],
    data(){
        return {
            paneShow: false,
            index: 0
        }
    },
    methods: {
        toggle(){
            this.$parent.toggle({
                name: this.name || this.index,
                paneShow: this.paneShow
            })
        },

    }
})

Vue.component('collapse',{
    template: `
        <div class="collapse">
            <slot></slot>
        </div>
    `,
    data(){
        return {
            // currentValue: this.value
        }
    },
    methods: {
        toggle({name,paneShow}){
            console.log(name,'11111',paneShow)
            let list = []
            list.push(name)

            this.currentValue = list
        }
    },
    computed: {
        currentValue:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        },
        setActive(){
            console.log('111')
            this.$children.forEach((item)=>{
                item.index = index
                item.paneShow = item.name == this.getActive()
            })

            console.log(this.$children,'this.$children')
        },
        getActive(){
            return 2
        }
    },
    watch: {
        currentValue(){
            this.setActive()
        }
    }
})

</script>

<style scoped>
</style>

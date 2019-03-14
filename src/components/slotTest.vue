<template>
    <div>
        <learnSlot>
            <p>slot 的内容</p>
        </learnSlot>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <learnSlot2>
        </learnSlot2>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <learnSlot3  slot="bottom">
            top 插槽
        </learnSlot3>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('learnSlot',{
    template: `<div>
            <div>{{ name }}</div>
            <slot></slot>
        </div>`,
    data(){
        return {
            name: '121321'
        }
    }
})

Vue.component('learnSlot2',{
    template: `<div>
            <div>{{ name }}</div>
            <slot><p>插槽无内容，这个是默认的内容</p></slot>
        </div>`,
    data(){
        return {
            name: '我是 learnSlot2'
        }
    }
})

Vue.component('learnSlot3',{
    template: `<div>
            <div>{{ name }}</div>
            <div>
                <slot><p>Some default message</p></slot>  
                <br/>  
                <slot name="top"></slot>  
                <br/>  
                <slot name="bottom"></slot>
            </div>
        </div>
        </div>`,
    data(){
        return {
            name: '我是 learnSlot3'
        }
    }
})
export default {
    name: 'slotTest',
    data(){
        return {
            list: []
        }
    },
    methods:{
        btnclick(){
            this.list = [
                {value: '1'},
                {value: '2'},
                {value: '3'}
            ]
        }
    },
    watch: {
    }
}
</script>

<style scoped>
</style>

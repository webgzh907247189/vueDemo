<template>
    <div>
        <theme :pos="[0, 0]" :size="[500, 400]"  :radius="[0, 0.5]" :borderWidth="2" :borderColor="'#fff'">
            <some-component title="我是标题"  :data="testData" @event="reciveRocket"/>
        </theme>
    </div>
</template>

<script>
/**
 * https://github.com/justemit/coding-note/issues/22
 * 
 * 无渲染组件
 */
import Vue from 'vue'
Vue.component('theme',{
    inheritAttrs:false,
    data() {
        return {
        }
    },

    render(h) {
        const theme = this.$attrs // 通过 $attrs 可以拿到使用该组件时定义的 props，而无需声明有哪些 props (父组件传递了属性值，但是子组件并未使用)

        const merge = vNode => {
            if (!vNode.tag) {
                return
            }

            if (vNode.componentOptions) {
                let props = vNode.componentOptions.propsData
                props = Object.assign({}, theme, props)
                vNode.componentOptions.propsData = props
            } else {
                if (!vNode.data) {
                    return
                }

                let attrs = vNode.data.attrs || {}
                attrs = Object.assign({}, theme, attrs)
                vNode.data.attrs = attrs
            }
        }

        this.$slots.default.map(vNode => merge(vNode))

        /**
         * 当在子组件中加入inheritAttrs:false时a属性就不会自动加到根元素上了 (父组件传递下来的值,但是未被使用 -> 此时不在根元素上面显示)
         * 
         * this.$attrs 存储非prop特性 (存储没有在props声明的属性,但是被传递下来的属性 -> 未被使用)
         */
        // Object.keys(this.$attrs).forEach(key => {
        //     this.$attrs[key] = null
        // })

        console.log(this.$slots.default,'theme',theme)
        return this.$slots.default[0] // 直接返回，无需额外渲染
    }
})


Vue.component('someComponent',{
    template: `<div>
            <div>{{ testData.name }}</div>
            <div>{{ this.testData }}</div>
            <div>title   ->   {{ this.title }}</div>
            <div>size   ->   {{ this.size }},   dataSize   ->   {{dataSize}}   </div>
            <div>borderWidth   ->   {{ borderWidth }},  borderColor   ->   {{borderColor}}</div>
            <div @click="onEmit">点击向爷爷组件传递事件</div>
        </div>`,
    props: ['data','title','size','borderWidth','borderColor'],
    data() {
        return {
            testData: this.data,
            dataSize: this.size
        }
    },
    methods:{
        onEmit(){
            console.log('11')
            this.$emit('event','click')
        }
    }
})





export default {
    name: 'nonRenderingComponent',
    data(){
        return {
            testData: {
                name: '无渲染组件'
            }
        }
    },
    methods: {
        reciveRocket(e){
            console.log('孙子组件向上传递事件',e)
        }
    }
}
</script>

<style scoped>
</style>

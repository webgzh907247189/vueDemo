<template>
    <div>
        <theme :pos="[0, 0]" :size="[500, 400]"  :radius="[0, 0.5]" :borderWidth="2" :borderColor="'#fff'" >
            <some-component title="我是标题"  :data="testData" />
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
    data() {
        return {
        }
    },

    render(h) {
        const theme = this.$attrs // 通过 $attrs 可以拿到使用该组件时定义的 props，而无需声明有哪些 props
        console.log(this.$slots.default,'theme',this.$slots.default.length)

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

        Object.keys(this.$attrs).forEach(key => {
            this.$attrs[key] = null
        })

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
        </div>`,
    props: ['data','title','size','borderWidth','borderColor'],
    data() {
        return {
            testData: this.data,
            dataSize: this.size
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
    }
}
</script>

<style scoped>
</style>

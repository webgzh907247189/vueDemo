<template>
    <div>
        <smart-item :data="data"></smart-item>
        <button @click="btnclick('img')">切换为图片组件</button>
        <button @click="btnclick('video')">切换为视频组件</button>
        <button @click="btnclick('text')">切换为文本组件</button>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <p>下面的是vue的jsx</p>
        <jsxExample></jsxExample>
    </div>
</template>

<script>
import Vue from 'vue'
import './jsxExample'

let imgItem = {
    props: ['data'],
    render(h){
        return h('div',[
            h('p','图片组件'),
            h('img',{
                attrs: {
                    src: this.data.url
                }   
            })
        ])
    }
}

let videoItem = {
    props: ['data'],
    render(h){
        return h('div',[
            h('p','视频组件'),
            h('video',{
                attrs: {
                    src: this.data.url,
                    autoplay: 'autoplay',
                    controls: 'controls'
                }   
            })
        ])
    }
}

let textItem = {
    props: ['data'],
    render(h){
        return h('div',[
            h('p','纯文本组件'),
            h('p',this.data.text)
        ])
    }
}

Vue.component('smart-item',{
    functional: true,
    render(h,ctx){
        function getComponents(){
            let data = ctx.props.data
            if(data.type == 'img'){
                return imgItem
            }else if(data.type == 'video'){
                return videoItem
            }else{
                return textItem
            }
        }

        return h(getComponents(),{
            props: {
                data: ctx.props.data
            }
        },
        ctx.children // 相当于 this.$slots.default
        )
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
})

export default {
    name: 'functional',
    data(){
        return {
            data: {}
        }
    },
    methods: {
        btnclick(type){
            if(type == 'img'){
                this.data = {
                    type,
                    url: 'http://raw.githubusercontent.com/iview/iview/master/assets/logo.png'
                }
            }else if(type == 'video'){
                this.data = {
                    type,
                    url: 'http://vjs.zencdn.net/v/oceans.mp4'
                }
            }else{
                this.data = {
                    type,
                    text: '这是一段文本'
                }
            }
        }
    },
    mounted(){
        this.btnclick('img')
    }
}
</script>

<style scoped>
</style>

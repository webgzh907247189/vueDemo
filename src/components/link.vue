<template>
    <div>
        <anchor :level=2 title="特性">特性1111</anchor>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <div>
            <ele></ele>
        </div>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <list :list=list >
            <slot>我是slot的内容</slot>
        </list>
        <button @click="btnclick" class="btn">按钮</button>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <inputele/>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <testSlot>
            <div>this is slot</div>
        </testSlot>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <test1>
            <div slot="slot1">this is slot1</div>
            <div slot="slot2">this is slot2</div>
        </test1>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <test2>
            <template slot-scope="propsa">
                <div>{{propsa.text}}</div>
            </template>
        </test2>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <test3>
            <template slot-scope="propsa" slot="name1">
                <div>{{propsa.text1}}</div>
            </template>
            <template slot-scope="propsa" slot="name2">
                <div>{{propsa.text2}}</div>
            </template>
        </test3>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <we-chat>
           
        </we-chat>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
</template>

<script>
import Vue from 'vue'
import './anchor'

let child = {
    render(h){
        return h('p','textDes')
    }
}
Vue.component('ele',{
    render(h){
        let childNode = h(child)
        return h(
            'div',
            [
                childNode,
                childNode,
                h('p','textDes11'),
                h('p','textDes11'),
                Array.apply(null,{length: 2}).map(()=>{
                    return h(child)
                })
            ]
        )
    }
})

Vue.component('list',{
    render(h){
        if(this.list.length){
            let nodes = this.list.map((item)=>{
                return h('li',[
                    h('a',
                        {
                            domProps: {
                                'href': item.value
                            }
                        },  
                        item.value)
                    ])
            })

            if(this.$slots.default == 'undefined'){
                nodes.push(h('p','slot 暂无内容'))
            }else{
                nodes.push(h('p',this.$slots.default))
            }

            return h('ul',nodes)
        }else{
            return h('p','暂无列表数据')
        }
    },
    props: {
        list: {
            type: Array,
            default: []
        }
    }
})

Vue.component('inputele',{
    render(h){        
        let _this = this
        return h(
            'div',
            [
                h('input',{
                    domProps: {
                        value: this.value
                    },
                    on: {
                        input(e){
                            _this.value = e.target.value
                        }
                    },
                }),        
                h('p',`this.value -> ${this.value}`)
            ]
        )
    },
    data() {
        return {
            value: ''
        }
    }
})

Vue.component('testSlot',{
    render(h){        
        console.log(this.$slots.default,'this.$slots.default')
        return h(
            'div',
            [
                h('div',{
                    domProps: {
                        innerHTML: '我是div'
                    }
                }),        
                h('p',this.$slots.default)
            ]
        )
    }
})

Vue.component('test1',{
    render(h){        
        return h(
            'div',
            [
                h('div',{
                    domProps: {
                        innerHTML: '我是div1'
                    }
                }),        
                h('p',this.$slots.slot1),
                h('p',this.$slots.slot2)
            ]
        )
    }
})

Vue.component('test2',{
    render(h){
        let _this = this   

        return h(
            'div',
            [
                h('div',{
                    domProps: {
                        innerHTML: '我是div2'
                    }
                }),        
                h('p',_this.$scopedSlots.default({
                    text: 'this is slot2'
                }))
            ]
        )
    }
})

Vue.component('test3',{
    render(h){
        let _this = this   

        return h(
            'div',
            [
                h('div',{
                    domProps: {
                        innerHTML: '我是div3'
                    }
                }),        
                h('p',_this.$scopedSlots.name1({
                    text1: 'this is slot3  ->  test3 的$scopedSlots.name1'
                })),
                h('p',_this.$scopedSlots.name2({
                    text2: 'this is slot3  ->  test3 的$scopedSlots.name2'
                }))
            ]
        )
    }
})

Vue.component('we-chat',{
    render(h){
        let _this = this   

        let nodes = this.chats.map((item)=>{
            return h('li',item)
        })
        return h(
            'div',
            [
                h('div',{
                    domProps: {
                        innerHTML: '我是we-chat,下面是历史记录'
                    }
                }),
                h('ul',[nodes]),
                h('input',{
                    domProps: {
                        placeholder: '请输入聊天类容',
                        value: this.value
                    },
                    style: {
                        display: 'inline-block',
                        'text-align': 'center'
                    },
                    on: {
                        input(e){
                            _this.value = e.target.value
                        },
                        keydown(e){
                            if(e.keyCode == 13 && _this.value){
                                _this.chats.push(_this.value)
                                _this.value = ''
                            }
                        }
                    }
                }),
                h('input',{
                    domProps: {
                        type: 'button',
                        value: '提交'
                    },
                    style: {
                        display: 'inline-block',
                        'text-align': 'center'
                    },
                    on: {
                        click(){
                            if(_this.value){
                                _this.chats.push(_this.value)
                                _this.value = ''
                            }
                        }
                    }
                }),
            ]
        )
    },
    data(){
        return {
            chats: ['我是chat','我也是'],
            value: '????'
        }
    }
})
/**
 * 全局配置 也可以单独抽出来做个js文件
 */

// Vue.component('anchor',{
//     props: ['level','title'],
//     render: function(h){
//         return h(
//             'h' + this.level,
//             [
//                 h('a',{
//                     domProps: {
//                         href: '#' + this.title
//                     }
//                 },
//                 this.$slots.default)
//             ]
//         )
//     }
// })

export default {
    name: 'linkHref',
    data(){
        return {
            list: [],
            value: ''
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
.btn{
    width: 50px;
    height: 20px;
    border: 1ps solid #000;
    background: #999;
}
</style>

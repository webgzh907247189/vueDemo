
import Vue from 'vue'
import Bus from '@/bus/bus.js'

Vue.component('vList',{
    render(h){
        let _this = this

        return h('div',{
            },
            this.list.map((item,index)=>{
                return h('div',{
                        style: {
                        }
                    },
                    [
                        h('div',{
                            style: {
                                display: 'inline-block',
                                'margin-right': '10px',
                                'font-weight': '400'
                            }
                        },`${item.name}：`),
                        h('div',{
                            style: {
                                display: 'inline-block',
                                'font-weight': '900'
                            }
                        },item.value),
                        h('div',{
                            style: {
                                display: 'inline-block',
                                'margin-left': '30px'
                            },
                            on: {
                                click(){
                                    Bus.$emit('emitSearch',index)
                                    // _this.$emit('emitSearch',index)
                                }
                            }
                        },'回复'),
                        h('hr','')
                    ]
                )
            })
        )
    },
    data(){
        return {
        }
    },  
    props: {
        'list': {
            type: Array,
            default: ()=>{
                return []
            }
        }
    }
})
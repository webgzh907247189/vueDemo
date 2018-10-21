
import Vue from 'vue'

Vue.component('vInput',{
    render(h){
        let _this = this

        return h('div',{
        },[
            h('div',{
                style: {
                    display: 'inline-block',
                    width: '90px'
                }
            },'昵称：'),
            h('input',{
                domProps: {
                    type: 'input',
                    value: this.value
                },
                style: {
                    width: '200px',
                    height: '30px',
                    'margin-bottom': '6px'
                },
                on: {
                    input(e){
                        _this.inputValue = e.target.value
                        _this.$emit('emitValue',_this.inputValue)
                    }
                }
            })
        ])
    },
    data(){
        return {
            inputValue: this.value
        }
    },  
    props: {
        'value': {
            type: String,
            default: ''
        }
    }
})
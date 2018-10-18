import Vue from 'vue'

Vue.component('vTextArea',{
    render(h){
        let _this = this

        return h('div',{
        },[
            h('div',{
                style: {
                    display: 'inline-block',
                    width: '90px',
                    'vertical-align': 'top'
                }
            },'留言内容：'),
            h('textarea',{
                domProps: {
                    value: this.value
                },
                ref: 'messageText',
                style: {
                    width: '200px',
                    height: '60px',
                    'margin-bottom': '6px',
                    padding: '0px'
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
    },
    methods: {
        focus(){
            this.$refs.messageText.focus()
        }
    }
})
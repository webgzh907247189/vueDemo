<template>
    <div class="hello">
       <v-input :value="value" @emitValue="onValue"></v-input>
       <v-textArea :value="textValue" @emitValue="onTextValue" ref="messageText"></v-textArea>
       <button class="btn" @click="btnclick">发布</button>
    </div>
</template>

<script>
import './vInput'
import './vTextArea'
import Bus from '@/bus/bus.js'
import functionalVue from './functional.vue';

export default {
    name: 'v-form',
    data(){
        return {
            value: '',
            textValue: ''
        }
    },
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        onValue(value){
            this.value = value
        },
        onTextValue(value){
            this.textValue = value
        },
        btnclick(){
            if(this.value && this.textValue){
                this.$emit('pushData',{
                    name: this.value,
                    value: this.textValue
                })

                this.textValue = ''
                this.value = ''
            }
        }
    },
    mounted(){
        let _this = this
        window.gzh = this
        Bus.$on('emitSearch',function(index){
            _this.value = _this.list[index].name
            let value = _this.list[index].value

            _this.textValue = `回复@ ${value}：`  
            _this.$refs.messageText.focus()
        })
    }
}
</script>

<style scoped>
.btn{
    background: blue;
    color: #fff;
    width: 70px;
    height: 26px;
    line-height: 1;
    margin-left: 224px;
    margin-bottom: 20px;
}
</style>
<template>
    <div>
         我的值是{{value}}
        <number-input-component v-model="value" :max="max" :min="min"></number-input-component>
    </div>
</template>

<script>
function isNumber(val){
    return !Number.isNaN(val)
}

import Vue from 'vue'
export default {
    name: 'inputComponent',
    data() {
        return {
            value: 0,
            max: 10,
            min: -10
        }
    }
}

Vue.component('numberInputComponent',{
    template: `<div>
        <input type="text" :value="currentValue" @change="onInputChange"/>{{currentValue}}
        <span class="add" @click="add">+</span>
        <span class="jian" @click="jian">-</span>
    </div>`,
    props: ['value','max','min'],
    data(){
        return {
            currentValue: this.value,
            maxNumber: this.max,
            minNumber: this.min
        }
    },
    watch:{
        value(val){
            this.updateValue(val)
        },
        currentValue(val){
            this.$emit('input',val)
        }
    },
    methods:{
        add(){
            if(this.currentValue >= this.maxNumber) return
            this.currentValue += 1
        },
        onInputChange(e){
            let val = e.target.value.trim()
            val = Number(val)

            if(isNumber(val)){
                this.currentValue = val
    
                if(val >= this.maxNumber){
                    this.currentValue = this.maxNumber
                }

                if(val <= this.minNumber){
                    this.currentValue = this.minNumber
                }
            }else{
                e.target.value = this.currentValue
            }
        },
        jian(){
            if(this.currentValue <= this.minNumber) return
            this.currentValue -= 1
        },
        updateValue(val){
            if(val > this.maxNumber) val = this.max
            if(val < this.minNumber) val = this.minNumber
            this.currentValue = val
        }
    },
    mounted(){
        this.updateValue(this.value)
    }
})
</script>

<style scoped>
</style>

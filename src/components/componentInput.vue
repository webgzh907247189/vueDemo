<template>
    <div class="hello">
        <input type="text" v-model="count"/>
        <label class="add" @click="addCount">+</label>
        <label class="jian" @click="jianCount">-</label>
    </div>
</template>

<script>
import Bus from '@/bus/bus.js'
export default {
    name: 'componentInput',
    props: ['maxCount','minCount','value'],
    data(){
        return {
            count: this.value,
        }
    },
    methods: {
        addCount(){
            if(this.count < this.maxCount){
                this.count += 1
                this.emitCount(this.count)
            }
        },
        jianCount(){
            if(this.count > this.minCount){
                this.count -= 1
                this.emitCount(this.count)
            }
        },
        emitCount(value){
            /*
             * 通过this 向上传播事件
             */
            this.$emit('emitCount',value)

            /*
             * 通过bus 向上传播数据
             */
            //Bus.$emit('emitCountFromChildren',value)
        }
    }
}
</script>

<style scoped>
    .add{
        margin-left: 10px;
        font-size: 14px;
        color: red;
        margin-right: 20px;
    }
    .jian{
        font-size: 14px;
        color: red;
    }
</style>

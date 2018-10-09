<template>
    <div class="hello">
        <componentInput :value="value" :maxCount="maxCount" :minCount="minCount" @emitCount="emitCountAccept"/>
        <div>
            <span>
                {{value}} 父组件的值 -> 子组件可变更
            </span>
        </div>
    </div>
</template>

<script>
import componentInput from './componentInput'
import Bus from '@/bus/bus.js'
export default {
    name: 'componentInputParent',
    data(){
        return {
            value: 2,
            maxCount: 6,
            minCount: -2
        }
    },
    methods:{
        /*
         * 通过子组件向上传播  父组件接收到数据
         */
        emitCountAccept(value){
            console.log('父组建接收',this.value)
            this.value = value
        }
    },
    mounted() {
        /*
         * 通过bus 接收子组件的数据
         */
        Bus.$on('emitCountFromChildren',(value)=>{
            console.log('父组建接收',this.value)
            this.value = value
        })
    },
    components: {
        componentInput
    }
}
</script>


<style scoped>
</style>

<template>
    <div class="hello">
        <v-form @pushData="onData" :list="list"></v-form>
        <v-list :list="list"></v-list>
    </div>
</template>

<script>
import vForm from './vform'
import './vlist'

export default {
    name: 'talklist',
    data(){
        return {
            list: [
                {name: '张三',value: '我是张三'},
                {name: '李四',value: '我是李四'}
            ]
        }
    },
    methods: {
        onData(value){
            this.list.push(value)
        }
    },
    components: {
        vForm,
        // vList
    },
    mounted(){
    }
}
</script>

<style scoped>
.hello{
    width: 360px;

}
</style>
<template>
    <div>
        共享数据测试{{test}}
        <data-test></data-test>
        <data-test></data-test>
        <data-test></data-test>
        <table>
            <tbody>
                <th>
                    <td>11</td>
                </th>
            </tbody>
        </table>
        
        <table>
            <tbody :is="tableTestComponent"  :data="test">
                <th>
                    <td>22</td>
                </th>
            </tbody>
        </table>
    </div>
</template>

<script>
import Vue from 'vue'
var dataObj = {
    count: 1
}
export default {
    name: 'dataComponent',
    data(){
        return {
            test: ['aa','bb'],
            tableTestComponent: 'tableTest'
        }
    },
    methods:{
    },
}

Vue.component('dataTest',{
    template: `<div @click="count++">{{count}}</div>`,
    data(){
        return dataObj
    }
})

Vue.component('tableTest',{
    template: `<div>{{testData}}</div>`,
    props: ['data'],
    data(){
        return {
            myData: this.data
        }
    },
    created(){
        console.log(this.myData,'父组件传递值',Array.isArray(this.myData))
        if(Array.isArray(this.myData)){
            this.myData.push('zzzzz')
        }
    },
    computed: {
        testData(){
            let a = [...this.data]
            a.push('aaaa')
            return a
        }
    }
})
</script>

<style scoped>
</style>

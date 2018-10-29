<template>
    <div>
       <v-table :data="tableData" :columnData="columnData">

       </v-table>
    </div>
</template>

<script>
import Bus from '@/bus/bus.js'
import './vTable'
export default {
    name: 'renderTable',
    data(){
        return {
           columnData: [{title: '姓名', key: 'name'},{title: '性别', key: 'sex',sortable: true},{title: '地址', key: 'adress'}],
           tableData: [{name: '张三',sex: '男',adress: '安徽'},{name: '11',sex: '女',adress: '湖北'}]
        }
    },
    methods:{
        
    },
    watch: {
       
    }
}
</script>

<style scoped>

</style>

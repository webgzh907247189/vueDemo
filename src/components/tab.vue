<template>
    <div>
        <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)" :key=index>
            {{item.label}}--{{currentValue}}
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Bus from '@/bus/bus.js'
export default {
    name: 'tab',
    props: ['value'],
    data(){
        return {
            navList: [],
            // currentValue: this.value
        }
    },
    methods:{
        tabCls(item){
            return [
                'tabs-tab',
                {
                    'tab-active': item.name === this.currentValue
                }
            ]
        },
        getTabs(){
            return this.$children.filter((item)=>{
                return item.$options.name === 'pane'
            })
        },
        updateNav(){
            // this.getTabs().reduce((result,item)=>{
            //     result.push({
            //         label: item.label,
            //         name: item.name
            //     })
            //     return result
            // },this.navList)

            this.getTabs().forEach((item,index)=>{
                this.navList.push({
                    label: item.label,
                    name: item.name || index
                })

                // 多余代码
                // if(!item.name){
                //     item.name = index
                // }

                if(index == 0){
                    if(!this.currentValue){
                        // 多余代码
                        // this.currentValue == item.name || index
                        this.currentValue == item.name
                    }
                }
            })

            this.updateNavStatus()
        },
        updateNavStatus(){
            this.getTabs().forEach((item)=>{
                item.show = item.name == this.currentValue
            })
        },
        handleChange(index){
            let nav = this.navList[index]
            let name = nav.name

            this.currentValue = name
            /**
             * 向上传播 name 属性值
             */
            // this.$emit('input',name)
            
            // 多余代码
            // this.$emit('on-click',name)
        }
    },
    watch: {
        currentValue(){
            this.updateNavStatus()
        },
        // value(value){
        //     this.currentValue = value
        // }
    },
    computed: {
        currentValue: {
            get(){
                console.log(this.value,'?????????/')
                return this.value
            },
            set(value){
                this.$emit('input',value)
            }
        }
    }
}
</script>

<style scoped>
.tabs-tab{
    display: inline-block;
    margin-right: 10px;
}
.tab-active{
    color: #3399ff;
    border-top: 1px solid #3399ff;
    border-bottom: 1px solid #fff;
}
</style>

<template>
    <div class="hello">
        <div>
            <div class="tabs-bar">
                <tab v-model="activeKey">
                    <pane label="标签1" name="1">
                        1111
                    </pane>
                    <pane label="标签2" name="2">
                        2222
                    </pane>
                    <pane label="标签3" name="3">
                        33333
                    </pane>
                </tab>
            </div>
        </div>
    </div>
</template>

<script>
import pane from './pane' 
import tab from './tab'
export default {
    name: 'containerTab',
    data(){
        return {
            activeKey: '1'
        }
    },
    components: {
        pane,
        tab
    },
    watch: {
        activeKey(val){
            console.log(val,'这是watch -> activeKey的变化')
        }
    },
    mounted(){
        
        /**
         * 防止重复添加出现的问题
         * 所以不再 panne 组件 的 mounted 调用 updateNav
         */
        this.$children[0].$children[0].updateNav()
    }
}
</script>

<style scoped>
</style>
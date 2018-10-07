<template>
    <div class="hello" v-show="show">
        <slot>
        </slot>
    </div>
</template>

<script>
import Bus from '@/bus/bus.js'
import Tab from './tab' 
export default {
    name: 'pane',
    props: ['label','name'],
    data(){
        return {
            show: true
        }
    },
    methods:{
        updateNav(){
            this.$parent.updateNav()
        }
    },
    watch: {
        lebel(){
            this.updateNav()
        }
    },
    mounted(){
        // this.updateNav()
    },
    components: {
        Tab
    }
}
</script>

<style scoped>
</style>
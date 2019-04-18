<template>
    <div class="hello" v-show="show">
        <slot>
            <div>??????</div>
        </slot>
        <div>!!!!!</div>
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
</style>
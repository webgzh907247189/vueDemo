<template>
    <div>
        <s-axios url="https://api.github.com/orgs/reactjs/repos">
            <div slot-scope="{ loading, response }" slot="">
                <div v-if="loading">loading</div>
                <div v-else>响应数据为 ->  {{ response.data[0] }}</div>
            </div>
        </s-axios>
    </div>
</template>

<script>
/**
 * https://github.com/justemit/coding-note/issues/22
 * 
 * 无渲染组件
 */
import Vue from 'vue'
Vue.component('sAxios',{
    props: ['url'],
    data() {
        return {
            loading: true,
            response: null
        }
    },
    created() {
        this.axios.get(this.url).then(response => {
            this.loading = false
            this.response = response
        })
    },
    render() {
        // 注意 scopedSlots 的 slots 的名字
        return this.$scopedSlots.default({
            loading: this.loading,
            response: this.response
        })
    }
})





export default {
    name: 'nonRenderingComponent2',
    data(){
        return {
        }
    }
}
</script>

<style scoped>
</style>

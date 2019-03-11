<template>
    <div>
        <s-axios url="https://api.github.com/orgs/reactjs/repos">
            <div slot-scope="{ loading, response, }" slot="">
                <div v-if="loading">loading</div>
                <div v-else>响应数据为 ->  {{ response.data[0] }}</div>
            </div>
        </s-axios>

        <childTest>
            <div slot-scope="user">
                <div class="tmpl">
                    <div v-for="(item,index) in user.data" :key=index>
                        <span >{{item}}</span>
                    </div>
                </div>
            </div>
        </childTest>
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


Vue.component('childTest',{
    template: `<div>
            <h3>这里是子组件</h3>
            <slot :data="data"></slot>
        </div>`,
    data() {
        return {
           data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba'],
        }
    }
})



export default {
    name: 'nonRenderingComponent2',
    data(){
        return {
            name: '111'
        }
    }
}
</script>

<style scoped>
</style>

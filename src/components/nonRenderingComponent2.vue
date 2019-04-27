<template>
    <div>
        <s-axios url="https://api.github.com/orgs/reactjs/repos">
            <div slot-scope="{ loading, response, }" slot="">
                <div v-if="loading">loading</div>
                <div v-else>响应数据为 ->  {{ response.data[0] }}</div>
            </div>
        </s-axios>

        <childTest>
            <div slot-scope="user" class="11">
                <div class="tmpl">
                    <div v-for="(item,index) in user.data" :key=index>
                        <span >{{item}}</span>
                    </div>
                </div>
            </div>
        </childTest>
        <span>
            祖孙组件测试
            <event-test v-on:children="reciveRocket"></event-test>
        </span>
        
        <!-- 每次切换时，输入框都将被重新渲染。注意，<label> 元素仍然会被高效地复用，因为它们没有添加 key 属性。 -->
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
        </template>

        <div id='example-3'>
            复选框组
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
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

Vue.component('eventTest',{
    template : `<div>{{name}}
        <event-father v-on="$listeners"></event-father>
    </div>`,
    data(){
        return {
            name: '爷爷组件'
        }
    },
    created(){
        console.log(this.$listeners,'this.$listeners 爷爷组件')
    }
})
Vue.component('eventFather',{
    template : `<div>{{name}}
        <event-children v-on="$listeners"></event-children>
    </div>`,
    data(){
        return {
            name: '父亲组件'
        }
    },
    created(){
        console.log(this.$listeners,'this.$listeners 父亲组件')
    }
})
Vue.component('eventChildren',{
    template : `<div>{{name}}
        <span @click="onChildren">111</span>
    </div>`,
    data(){
        return {
            name: '孙子组件'
        }
    },
    methods:{
        onChildren(){
            console.log('孙子组件')
            this.$emit('children','onChildren')
        }
    },
    created(){
        console.log(this.$listeners,'this.$listeners 孙子组件')
    }
})

export default {
    name: 'nonRenderingComponent2',
    data(){
        return {
            name: '111',
            loginType: 'username',
            checkedNames: []
        }
    },
    methods:{
        reciveRocket(e){
            console.log('事件往上传递222',e)
            this.loginType = ''
        }
    },
    created(){
        console.log(this.$listeners,'this.$listeners 总组件')
    }
}
</script>

<style scoped>
</style>

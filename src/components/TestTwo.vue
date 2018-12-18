<template>
  <div class="hello">
      <p>父组件传递数据111111111111111111111111111</p>
      <button @click='getAxios'>axios通过Get获取数据</button>
      <div>{{msg}}</div>
      <button @click='postAxios'>axios通过Post获取数据</button>
      <button @click='configAxios'>axios通过Config获取数据</button>
      <div>{{fullMsg}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {setCookie} from '@/util/index'

@Component({
  /** props默认数据 */
  props: {
    propsMsg: {
      type: String,
      default: '默认数据～～～'
    }
  }
})

export default class Test extends Vue{
  /** data() */
  data(){
    return {
      msg: ''
    }
  }

  /** 钩子 */
  mounted(){
    this.axios.interceptors.request.use((config)=>{
      console.log('拦截请求在request阶段')
      return config
    }),
    this.axios.interceptors.response.use((response)=>{
      console.log('拦截请求在response阶段')
      return response
    }),

    setCookie()
  }

  /**computed属性 */
  get fullMsg(){
    return `${this.propsMsg}这是props传下来的数据`
  }

  /** methods */
  @windes
  getAxios(){
    console.log(document.cookie,'111')
    this.axios.get('/api/data',{
      params: {
        userId: '213'
      },
      headers: {
        token: 'access'
      }
    })
    .then((res)=>{

      let flag
      if(flag=true){
        import('@/bus/test')
        this.msg = res.data
      }

    })
    .catch((err)=>{
      console.log(err)
    })
  }

  postAxios(){
    this.axios.post('/api/post',{
      userId: 'post213'
    },{
      headers: {
        token: 'access'
      }
    })
    .then((res)=>{
      this.msg = res.data
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  configAxios(){
    this.axios({
      url: '/api/data',
      method: 'get',
      params: {
        userId: 'config'
      },
      data: {
        name: 'config'
      },
      headers: {
        token: 'axiosConfig'
      }
    }).then((res)=>{
      console.log('配合axios.interceptors.response()操作,此时数据已经接收完毕')
      this.msg = res.data
    }).catch((err)=>{
      console.log(err)
    })
  }
}


function windes(target,name,descriptor) {
  let fn = descriptor.value
  let that = this
  descriptor.value = (...argums)=>{
    console.log(argums,'111')  //argums 是一个数组 

    /**
     * this 指向 Vue.prototype  (this本来就是 Vue的实列)
     */
    return fn.apply(Vue.prototype,argums)
  }
  return descriptor
}





// export default {
//   name: 'Test',
//   data(){
//     return {
//       msg: ''
//     }
//   },
//   mounted(){
//     this.axios.interceptors.request.use((config)=>{
//       console.log('拦截请求在request阶段')
//       return config
//     }),
//     this.axios.interceptors.response.use((response)=>{
//       console.log('拦截请求在response阶段')
//       return response
//     })
//   },
//   methods: {
//     getAxios(){
//       this.axios.get('/api/data',{
//         params: {
//           userId: '213'
//         },
//         headers: {
//           token: 'access'
//         }
//       })
//       .then((res)=>{

//         let flag
//         if(flag=true){
//           import('@/bus/test')
//           this.msg = res.data
//         }

//       })
//       .catch((err)=>{
//         console.log(err)
//       })
//     },

//     postAxios(){
//       this.axios.post('/api/post',{
//         userId: 'post213'
//       },{
//         headers: {
//           token: 'access'
//         }
//       })
//       .then((res)=>{
//         this.msg = res.data
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
//     },

//     configAxios(){
//       this.axios({
//         url: '/api/data',
//         method: 'get',
//         params: {
//           userId: 'config'
//         },
//         data: {
//           name: 'config'
//         },
//         headers: {
//           token: 'axiosConfig'
//         }
//       }).then((res)=>{
//         console.log('配合axios.interceptors.response()操作,此时数据已经接收完毕')
//         this.msg = res.data
//       }).catch((err)=>{
//         console.log(err)
//       })
//     }

//   }
// }
</script>


<style scoped>
.hello{
  color: red;
}
</style>

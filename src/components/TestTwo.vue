<template>
  <div class="hello">
      <p>父组件传递数据111111111111111111111111111</p>
      <button @click='getAxios'>axios通过Get获取数据</button>
      <div>{{msg}}</div>
      <button @click='postAxios'>axios通过Post获取数据</button>
      <button @click='configAxios'>axios通过Config获取数据</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
    return {
      msg: ''
    }
  },
  mounted(){
    this.axios.interceptors.request.use((config)=>{
      console.log('拦截请求在request阶段')
      return config
    }),
    this.axios.interceptors.response.use((response)=>{
      console.log('拦截请求在response阶段')
      return response
    })
  },
  methods: {
    getAxios(){
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
    },

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
    },

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
}
</script>


<style scoped>
.hello{
  color: red;
}
</style>

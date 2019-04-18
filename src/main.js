// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad  from 'vue-lazyload'

// import './css/base.css'
// import './css/checkout.css'
// import './css/modal.css'
// import './css/reset.css'

import './../static/base.css'
import './../static/checkout.css'
import './../static/modal.css'
import './../static/reset.css'

Vue.use(VueLazyLoad,{
	loading: '/static/nv.jpg'
})
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.filter('formatMoney', function (value) {
	return `￥ ${value.toFixed(2)}`
})
Vue.filter('money',(value,type)=>{
	return `￥ ${value.toFixed(2)}${type}`
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

// http://www.cnblogs.com/kongxianghai/p/6732429.html
// ctrl+shirt+p -> pakeage install  -> vue Component
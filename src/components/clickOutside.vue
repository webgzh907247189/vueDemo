<template>
  	<div class="hello" v-clickoutside="handleclose">
      	<ClickOutsideHead @outsideHeadClick="headClick" :testSyncTest.sync="testSync">
              {{testSync}}父组件
      		<ClickOutsideContent v-show="show">
      			8888888888888888
      		</ClickOutsideContent>
      	</ClickOutsideHead>
  	</div>
</template>

<script>
import ClickOutsideContent from './ClickOutsideContent'
import ClickOutsideHead from './ClickOutsideHead'
import Vue from 'vue'

/**
 * 编写指令时，在 bind 钩子 内完成，同时在 unbind 内解除相关绑定
 */

let Time = {
	getUnix(){
		return new Date().getTime()
	},
	getTodayUnix(){
		let d = new Date()
		d.setHours(0)
		d.setMinutes(0)
		d.setSeconds(0)
		d.setMilliseconds(0) //setMilliseconds() 方法用于设置指定时间的毫秒字段。
		return d.getTime()
	},
	getFormatTime(time){
		let now = this.getUnix()

		let timer = (now - time) / 1000
		let doday = time - this.getTodayUnix

		let tips = ''
		if(timer < 0){
			tips = '刚刚'
		}else if(timer < 60){
			tips = '刚刚'
		}else if(timer < 3600){
			tips = `${ Math.floor(timer/60) } 分钟前`
		}else if(timer >= 3600 & doday >= 0 ){
			tips = `${ Math.floor(timer/3600) } 小时前`
		}else if(timer/86400 >= 1 && timer/86400 <= 31 ){
			tips = `${ Math.floor(timer/86400) } 天前`
		}else{
			let d = new Date(time)
			let month = (d.getMonth() + 1 + '').padStart(2,'0')
			let days = (d.getDate() + '').padStart(2,'0')

			tips = `${d.getFullYear()} - ${month} - ${days}`
		}
		return tips
	}
}

Vue.directive('time',{
	bind(el,bining,vnode){
		el.innerHTML = Time.getFormatTime(bining.value)

		el.__timeID = setInterval(()=>{
			el.innerHTML = Time.getFormatTime(bining.value)
		},60000)
	},
	unbind(el,bining,vnode){
		clearTimeout(el.__timeID)
		delete el.__timeID
	}
})

Vue.directive('clickoutside',{
	bind(el,bining,vnode){
		function close(e){
			if(el.contains(e.target)){
				return false
			}

			if(bining.expression){
				bining.value(e)
			}
		}

		el.__vueClick__ = close
		document.addEventListener('click',close)
	},
	unbind(el,bining,vnode){
		document.removeEventListener('click',el.__vueClick__)

		/**
		 * 在 unbind 中 移除对 document 的 click 的监听，
		 * 如果不移除，当组件或者元素销毁时，它仍然存在于内存中
		 */
		delete el.__vueClick__
	}
})	

export default {
  	name: 'ClickOutside',
  	data(){
  		return {
            show: false,
            testSync: '1111'
  		}
  	},
  	components: {
        ClickOutsideContent,
        ClickOutsideHead
  	},
  	methods: {
   		headClick(){
   			this.show = !this.show
   		},
   		handleclose(){
   			this.show = false
   		}
    },
    watch: {
        testSync(val){
            console.log('父组件的值：', val,'this.testSync ->',this.testSync)
        }
    }
}
</script>


<style scoped>
</style>

<template>
  	<div class="hello" v-clickoutside="handleclose">
      	<ClickOutsideHead @outsideHeadClick="headClick">
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
		delete el.__vueClick__
	}
})	

export default {
  	name: 'ClickOutside',
  	data(){
  		return {
  			show: false
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
  	}
}
</script>


<style scoped>
</style>

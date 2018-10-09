<template>
  	<div class="hello">
  		<div class="demo" @click="headClick">66666666666666</div>
    	<slot>
      	
     	</slot>
  	</div>
</template>

<script>
export default {
  	name: 'ClickOutsideHead',
  	methods: {
  		headClick(){
  			this.$emit('outsideHeadClick')
  		}
  	}
}
</script>


<style scoped>

.demo {
	width: 200px;
	height: 40px;
	background: red;
	margin-bottom: 10px;
}

</style>

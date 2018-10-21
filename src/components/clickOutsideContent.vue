<template>
	<div class="demo-content">
	    <div>777777777777777777</div>
	   	<slot></slot>
	</div>
</template>

<script>
export default {
  	name: 'ClickOutsideContent',
  	methods: {
  		getTitle(){
  		}
  	},
  	mounted(){
  		this.getTitle()
  	}
}
</script>


<style scoped>

.demo-content {
	background: #999;
	color: #000;
	font-size: 16px;
	width: 200px;
	height: 300px;
}

</style>

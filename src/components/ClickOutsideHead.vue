<template>
  	<div class="hello">
  		<div class="demo" @click="headClick">66666666666666</div>
  		<div v-time="timeNow" class="time-directive"></div>
  		<div v-time="timeBefore" class="time-directive"></div>
    	<slot>
      	
     	</slot>
        <div @click="testSyncTestClick">
            {{testSyncTest}} 子组件
        </div>
  	</div>
</template>

<script>
export default {
    name: 'ClickOutsideHead',
    props: ['testSyncTest'],
  	data(){
  		return {
  			timeNow: 1539193587165,
  			timeBefore: 1488930695721
  		}
  	},
  	methods: {
  		headClick(){
  			this.$emit('outsideHeadClick')
        },
        testSyncTestClick(){
            console.log('this.testSyncTest -> ',this.testSyncTest,'111')
            this.$emit('update:testSyncTest','99999999999999')
        }
      },
      wathch: {
        testSyncTest(val){
            console.log('this.testSyncTest -> ',this.testSyncTes,'val',val)
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

.time-directive{
	width: 200px;
	height: 18px;
	background: #967;
	margin-bottom: 2px;
}
</style>

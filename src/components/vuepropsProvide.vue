<template>
    <div>
        <div @click="toggle">点击</div>
        <child :temp="temp" :key="id" v-if="show" :show="show" @toggleshow="toggleShow"></child>
    </div>
</template>

<script>
export default {
    data() {
		return {
			temp: {name: '111'},
            id: 0,
            show: true,
        }
    },
    provide(){
        return {
            temps: this.temp,
            getTemp: this.getTemp,
        }
    },
    methods: {
        toggle: function(){
            /* this.$set(this,'temp',{name: 'zzzzzz'}) */
            this.temp = {name: 'zzzzzz'}
            this.show = true;
        
            // this.id += 1
            // this.temp.name = 'zzzzzz'
        },
        toggleShow(val){
            console.log(val, '??')
            this.show = val;
        },
        getTemp(){
            return this.temp;
        }
    },
    components: {
        "child": {
            template: '<div @click="onCLick">{{template.name}}---{{temps.name}}---{{getTempval.name}}--{{templateVal.name}}</div>',
            props: {
            	temp: {type: Object},
                show: {type: Boolean},
                getTemp: {
            		type: Function, 
              	    default: () => {}
                },
            },
            data(){
                return {
                    template: this.temp
                }
            },
            inject: ['temps','getTemp'],
			watch: {
                temp(val,oldval){
                    this.template = val;
                    // this.$forceUpdate();
                    console.log(val,oldval)
                }
            },
         	computed: {
                templateVal(){
                    return this.temp;
                },
                getTempval(){
              	    return this.getTemp();
                }
            },
            methods: {
            	onCLick(){
              	    // this.$emit('toggleshow',false)
                }
            },
            mounted(){
                console.log(this.temp,'child-mounted')
            },
            created(){
            	console.log(this.temp,'child-created')
            }
        }
    },
    created(){
		console.log('父组件重新渲染')
	}
}
</script>
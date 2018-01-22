<template>
  <div class="shop clearfix">
		<div class="shop-price-list">
			<div class="select-price" :class='{isChecked: priceChecked=="All"}' @click='selectPrice("All")'>All</div>
			<div v-for='({startPrice,endPrice},index) in priceList' class="select-price" @click='selectPrice(index)' :class='{isChecked: priceChecked==index}'>
				{{startPrice}}-{{endPrice}}
			</div>
		</div>
		<div class="product-list">
			<div class="goods">价格：12</div>
			<div class="goods">价格：120</div>
			<div class="goods">价格：2000</div>
		</div>
    <div v-for='item in result'>
      <ul>
        <li>{{item.productName}}</li>
        <li>{{item.price}}</li>
        <li>{{item.productId}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data(){
  	return {
  	  priceList: [{startPrice: 1, endPrice: 100},{startPrice: 101,endPrice: 1000},{startPrice: 1001,endPrice: 10000}],
  	  priceChecked: 'All',
      result:[]
  	}
  },
  mounted(){
    this.axios.get('/api/good',{
      params: {
        userId: '213'
      },
      headers: {
        token: 'access'
      }
    })
    .then((res)=>{
      this.result = res.data.result
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  methods: {
  	selectPrice(index){
  	  this.priceChecked = index
  	}
  }

}
</script>

<style scoped>
@import '../common.less';
/**@import '@/common.less';**/

.shop-price-list{
	width:30%;
	float:left;
  height:200px;
}
.product-list{
	width:70%;
	float:right;
}



        .clearfix:after{ 
            content: '';
            display: block;
            clear: both;
            height: 0;
            visibility: hidden;
        }
        .clearfix{ 
            zoom: 1;
        }



.goods{
	width:30%;
	height:200px;
	background: red;
	float: left;
	margin-right: 2%;
}
.select-price{
	padding-top: 30px;
	text-align: left;
	text-indent: 30px;
}

.isChecked{
	color: red;
}
</style>

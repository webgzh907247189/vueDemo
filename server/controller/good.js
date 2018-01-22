let express = require('express')
let mongoose = require('mongoose')

let app = express()
let router = express.Router()
let Goods = require('../monConfig/goods')

mongoose.connect('mongodb://127.0.0.1:27017/shop')

mongoose.connection.on('connected',()=>{
	console.log('MongoDB connect success')
})


router.get('/good',(req,res,next)=>{
	Goods.find({},(err,doc)=>{
		err && res.json({status: '1',msg: err.messga}) || res.json({status: '0',result: doc})
	})
})



module.exports = router
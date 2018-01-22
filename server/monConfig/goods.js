let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productSchema = new Schema({
	"productId": String,
	"productName": String,
	"productImage": String,
	"price": Number
})

module.exports = mongoose.model('Good',productSchema)


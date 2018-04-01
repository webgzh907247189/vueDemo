let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let good = require('./controller/good')

let port = 9000
let app = express()

app.use(bodyParser.json({type: 'application/json'}))




app.use('/api/',good)



app.get('/',(req,res,next)=>{
	res.json({check: '应用是否存活!'})
})


app.set('port',process.env.port || port)

let getPort = app.get('port')
let server = app.listen(getPort,()=>{
	let port = server.address().port
	let host = server.address().address
	console.log('服务启动成功  http://%s:%s',host,port)
})


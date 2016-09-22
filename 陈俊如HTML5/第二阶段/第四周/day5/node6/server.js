var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded( { extended:false }))
app.get('/login',function(req,res){
    console.log(req.query)
    res.send("返回的信息")
})
app.post('/login',function(req,res){
    console.log(req.body)
    res.send('数据接收已成功')
})
app.listen(4000,function(){
    console.log('ajax is running')
})
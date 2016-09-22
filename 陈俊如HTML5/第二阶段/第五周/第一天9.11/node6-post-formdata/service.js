var express = require('express')

var bodyParser = require('body-parser')
var multer = require('multer')

var app = express()
var form = multer()

app.use(express.static('wwwroot'))
// 解析body的编码, extended:false表示开启高级编码功能
app.use( bodyParser.urlencoded( { extended:false } ) )

app.get('/login', function(req, res){
    // 终端显示信息
    //console.log( req.query )
    res.send('这是服务器返回的信息')
} )

// express是不支持Post请求，所以需要导入body-parser模块
//
app.post('/login', form.array(), function(req,res){

    console.log( req.body )
    res.send('接收数据已成功')

})


app.listen(3000, function(){
    console.log('ajax is running')
})
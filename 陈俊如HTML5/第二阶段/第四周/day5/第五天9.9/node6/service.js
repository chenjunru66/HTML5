var express = require('express')

var bodyParser = require('body-parser')

var app = express()
app.use(express.static('wwwroot'))
// 解析body的编码, extended:false表示开启高级编码功能
app.use( bodyParser.urlencoded( { extended:false } ) )

app.get('/login', function(req, res){
    // 终端显示信息
    //console.log( req.query )
    res.send('这是服务器返回的信息')
} )

// express是不支持Post请求，所以需要导入body-parser模块
app.post('/login', function(req,res){
    if( req.body.name == 'lucy' && req.body.pwd == '123456' ){
        res.status(200).send('post登录成功')
    } else {
        res.status(200).send('post登录失败')
    }
})


app.listen(4000, function(){
    console.log('ajax is running')
})
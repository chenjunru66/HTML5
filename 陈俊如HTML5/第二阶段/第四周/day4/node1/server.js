var express = require('express')

var bodyParser = require('body-parser')

var app = express()
app.use(express.static('wwwroot'))

// 解析body的编码，extended：false；表示开启高级编码功能
app.use(bodyParser.urlencoded( { extended:false }))


app.get('/user',function(req,res){
    // 服务器内部设置接收的请求信息参数值
    if(req.query.name == 'lucy'&& req.query.pwd == '123456'){
        //  console.log('登录成功')
        // res.send('登录成功')
        setTimeout(function() {
            res.send('登录成功')
        }, 5000)
    } else{
        // console.log('登录失败')
        // res.send('登录失败')
         setTimeout(function() {
             res.send('登录失败')
        }, 5000)
    }  
}
   )


// express是不支持post请求，所以需要导入body-parser模块
app.post('/user',function(req,res){
    if(req.body.name == 'lucy'&& req.body.pwd == '123456'){
        res.status(200).send('post登录成功')
    }else{
        res.status(200).send('post登录失败')
    }
})



app.listen(4000,function(){
    console.log('ajax is running')
})
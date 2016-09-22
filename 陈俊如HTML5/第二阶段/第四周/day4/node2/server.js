var express = require('express')
var app = express()
app.use(express.static('wwwroot'))
app.get('/user',function(req,res){
    if(req.query.height == 'lucy' && req.query.weight == '123456'){
        res.status(200).send('登录成功')
    }else{
        res.status(200).send('登录失败')
    }
})


app.listen(5000,function(){
    console.log('ajax is running')
})   
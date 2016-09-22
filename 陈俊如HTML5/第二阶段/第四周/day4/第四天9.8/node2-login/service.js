var express = require('express')
var app = express()
app.use(express.static('wwwroot'))
app.get('/login', function(req, res){
    if( req.query.name =='yan' && req.query.pwd == '123456' ){
        res.status(200).send('登录成功')
    } else {
        res.status(200).send('登录失败')
    }
})
app.listen(4000, function(){
    console.log('login is running')
})
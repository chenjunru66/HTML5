var express = require('express')
var app = express()
app.use(express.static('wwwroot'))
app.get('/login', function(req, res){
    var name = req.query.name
    var pwd = req.query.pwd
    res.send('<strong> 您提交的信息是  </strong> <br>name:' + name + '<br> password:' + pwd)
})
app.listen(4000, function(){
    console.log('login is running')
})
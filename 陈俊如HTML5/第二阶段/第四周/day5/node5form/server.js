var express = require('express')
var app = new express()

app.use(express.static('wwwroot'))
app.get('/user',function(req,res){
    var username = req.query.username
    var password = req.query.password
    res.status(200).send(username + ',' + password)
})

app.listen(2000,function(){
    console.log('my ajax is running')
})
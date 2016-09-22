var express = require('express')
var app = express()
app.use(express.static('wwwroot'))
app.get('/user',function (req,res) {
    var weight = req.query.weight
    res.status(200).send(weight)
    
})
app.listen(3000,function(){
    console.log('ajax is running')
})
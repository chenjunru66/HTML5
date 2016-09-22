var express = require('express')
var app  = express()

app.use( express.static('wwwroot') )

app.get('/user', function(req, res){
    var h1 = req.query.height1
    res.status(200).send(h1)
})


app.listen(3000, function(){
    console.log('ajax is running')
})
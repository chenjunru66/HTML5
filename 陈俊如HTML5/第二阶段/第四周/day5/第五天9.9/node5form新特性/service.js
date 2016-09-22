var express = require('express')
var app = new express()

app.use( express.static('www') )
app.get('/login', function(req,res){
   var username = req.query.username
   var passward = req.query.passward
   res.status(200).send(username + ',' + passward ) 
})

app.listen(2000, function(){
    console.log('formnew is running')
})
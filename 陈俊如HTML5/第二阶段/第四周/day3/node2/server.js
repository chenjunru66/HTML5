var express =  require('express')

var app = express()

app.use(express.static('wwwroot'))
app.get('/user',function(req,res){
    var height = req.query.height
    res.status(200).send(height)
})

app.listen(3000,function(){
    console.log('ajax is running')
})
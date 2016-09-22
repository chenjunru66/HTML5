var express = require('express')
var app = express()
app.use(express.static('wwwroot'))
app.get('/user',function (req,res) {
    var word = req.query.word
    res.send('<strong>你提交的信息是</strong><br> ' + '<textarea cols="30" rows="10" style="resize:none;">' + word + '</textarea>')
})
app.listen(2000,function(){
    console.log('ajax is running')
})
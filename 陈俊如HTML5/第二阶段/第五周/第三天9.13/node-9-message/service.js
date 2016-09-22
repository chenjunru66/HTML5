//引入所需模块
var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    fs = require('fs')
//实例化对象
var app = express(),
    form = multer()
//引用中间件
app.use( express.static('www') )
app.use( bodyParser.urlencoded({extended:false}) )

//接收及处理post请求
app.post('/saveMessage', form.array(), function(req, res){
    console.log( req.body )
//    把数据保存至某个文件夹的文件中
    fs.exists('data', function(exists){
        if( !exists ){
            fs.mkdirSync('data')
        }
        var infos = req.body
        var mess = {
            infos,
            date : new Date(),
            ip : req.ip
        }
        var str = JSON.stringify(mess)
    //    添加文件内容到某个文件中
        fs.appendFile('data/info.txt', str + ',', function(err){
            if( err ){
                console.log('文件保存失败')
                //res.send('文件保存失败')
            } else {
                console.log('文件保存成功')
                //res.send('文件保存成功')
            }
        })

    })
})

app.get('/saveMessage', function(req, res){
    fs.exists('data', function(exists){
        if( exists ){
            fs.readFile('data/info.txt', function(err, data){
                if( data ){
                    res.send(data)
                } else {
                    res.send('获取数据失败')
                }
            })
        }
    })
})


app.listen(2000, function(){
    console.log('message is running')
})

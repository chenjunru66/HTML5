var express = require('express')
var bodyParser = require('body-parser')
var multer =  require('multer')
var fs = require('fs')
var form = multer()
var app = express()

app.use(express.static('wwwroot') )
app.use(bodyParser.urlencoded({extended:false}))

app.post('/user/login',form.array(),function(req,res){
    console.log(req.body)

    fs.exists('data',function(exists){
        if(!exists){
            fs.mkdirSync('data')

        }

        var infos = req.body
        var username = 'data/' + infos.name + '.txt'
        var mess = {
            infos,
            date:new Date()
        }
        var str = JSON.stringify(mess)

        fs.appendFile(username,str + ',',function(err){
            if(err){
                console.log('文件保存失败')
            }
            else{
                console.log('文件保存成功')

            }
        })
    })
})
app.get('/user/login', function(req, res){
    fs.exists('data', function(exists){
        if( exists ){
             fs.readdir('/data',function(err,files){
                 if(files){
                     res.send(files)
                     //for(var i = 0;i < files.length;i++){
                     //    fs.readFile(files[i],function(err,data){
                     //        if(data){
                     //            res.send(data)
                     //        }
                     //    })
                     //}
                 }else{
                     res.send('读取失败')
                 }
             })

        }
    })
})


app.listen(2000, function(){
    console.log('message is running')
})


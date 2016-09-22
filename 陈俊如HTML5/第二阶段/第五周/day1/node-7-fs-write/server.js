var express = require('express')
var bodyParser = require('body-parser')
//处理formdata数据的请求
var multer = require('multer')
//fs--file system 文件系统--负责存储和管理文件信息，可创建、添加删除等文件信息

var fs = require('fs')
var app = express()
var form = multer()
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended:false}))

app.post('/user',form.array(),function(req,res){
    //console.log(req.body)
    //res.send('数据接收已成功')
    //判断是否存在data文件夹，如果不存在，则创建该文件夹
    fs.exists('data',function(exists){
        if( !exists){
            console.log('文件不存在，需要创建文件')
            //同步创建文件名为data的文件夹
            fs.mkdirSync('data')
        }
        var infos = req.body
        var mess = {
            infos,
            date:new Date(),
            ip:req.ip
        }

        //console.log(mess)
        //把JS对象转化为JSON数据
        var str = JSON.stringify(mess)
        console.log(str)
        // 添加文件，并保存数据信息--req.body
        fs.appendFile('data/info.txt',str + ',',function(error){
             if(error){
                 console.log('数据保存失败')
                 res.send('数据保存失败')
             }else{
                 console.log('数据保存成功')
                 res.send('数据保存成功')
             }
        })
    })



})



app.listen(2000,function(){
    console.log('ajax is running')
})

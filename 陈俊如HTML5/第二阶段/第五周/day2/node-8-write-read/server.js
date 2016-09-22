var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
// 创建实例化对象
var fs = require('fs')
var app = express()
var form = multer()
//  设置中间件
 app.use(express.static('wwwroot'))
 app.use(bodyParser.urlencoded({extended:false}))
//  设置请求的处理及响应
 app.post('/login',form.array(),function(req,res){
    // 判断文件夹是否存在，如果不存在，则创建文件夹data
    // fs.exists(para,cb)--para文件夹名称，cb：查看文件是否存在，true/false
     fs.exists('data',function(exists){
         if(!exists){
             fs.mkdirSync('data')
         }
        //  文件夹添加相应的文件及添加内容
         var infos = req.body
         var mess =　{
             infos,
             date:new Date(),
             ip:req.ip
         }
         var inf = JSON.stringify(mess)
        //  fs.appendFile(para1,para2,cb)para1-文件路径， para2-文件内容，cb-文件是否保存
         fs.appendFile('data/info.txt',inf + ',',function(error){
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
 
 app.get('/login',function(req,res){
    //  判断当前文件是否存在
    fs.exists('data',function(exists){
        if(exists){
            // 读取文件夹中的某个文件内容
            fs.readFile('data/info.txt',function(err,data){
                if(data){
                  res.send(data)  
                }
                else{
                    res.send('获取数据失败')
                }
            })
        }
    })
 })
 
 
 app.listen(2000,function(){
    console.log('ajax is running')
})
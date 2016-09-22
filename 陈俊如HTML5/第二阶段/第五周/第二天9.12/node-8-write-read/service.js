/**
 * Created by Administrator on 2016/9/12.
 */
//    引入所需模块
var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    fs = require('fs')
//  创建实例化对象
var app = express(),
    form = multer()
// 设置中间件
app.use( express.static('www') )
app.use( bodyParser.urlencoded({ extended:false }) )
//设置请求的处理及响应
app.post('/login', form.array(), function(req, res){
    console.log(req.body)
    // 判断文件夹是否存在，如果不存在，创建文件夹data
    // fs.exists(para, cb) -- para-文件夹名称， cb：查看文件是否存在，true/false
    fs.exists('data', function(exists){
        if( !exists ){
            console.log('文件夹不存在，需要创建文件夹')
            fs.mkdirSync('data')
        }
    //    文件夹添加相应的文件，及添加文件内容
        var body = req.body
        var infos = {
            body,
            date : new Date(),
            ip : req.ip
        }
        var str = JSON.stringify(infos)
        //fs.appendFile( para1, para2, cb) para1-文件路径， para2-文件内容， cb-文件是否保存
        fs.appendFile('data/info.txt', str + ',' , function(error){
            if( error ){
                console.log('保存数据失败，请重新输入')
                res.send('保存数据失败，请重新输入')
            } else {
                 console.log('保存信息成功')
                res.send('保存信息成功')
            }
        })
    })
})

//处理get请求及响应
app.get('/login', function(req, res){
//    读取文件的前提--判断当前文件是否存在
    fs.exists('data', function(exists){
        if( exists ){
        //    读取文件夹中某个文件的内容
        //    fs.readFile(para1, cb(err, data) ) para1-文件路径;data-文件的内容s
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

//监听4000端口，查看页面显示
app.listen('4000', function(){
    console.log('fs-write-read is running')
})

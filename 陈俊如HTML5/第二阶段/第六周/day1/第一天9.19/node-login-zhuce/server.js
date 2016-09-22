//引入相关模块
var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    fs = require('fs'),
    cookieParser = require('cookie-parser')


//存储上传的文件

var storage = multer.diskStorage({
    //设置存储的文件路径
    destination:'uploads',
//    文件名称
    filename:function(req, file, cb){
        var uname = req.cookies.uname
        cb(null, uname + '.jpg' )
    }
})
//文件上传设置
var uploads = multer({storage})

//实例化对象
var app = express(),
    form = multer()
//设置中间件
app.use( express.static('www') )
app.use( bodyParser.urlencoded({ extended : false }) )
app.use( cookieParser() )
//处理注册的请求
app.post('/user/zhuce', function(req, res){
    //在req.body中添加Ip和注册日期
    console.log( req.body )
    req.body.ip = req.ip;
    req.body.date = new Date()


    function send(code, message){
        res.status(200).json({code, message})
    }

//    保存注册的信息至某个文件夹内；用户名作为文件名存在
//    先判断文件夹是否存在，如果存在，保存文件；如果不存在，则创建文件夹，保存文件
    var fileName = 'user/' + req.body.uname + '.txt'
    function saveFile(){
        fs.exists(fileName, function(ex){
            if( ex ){
                //res.send('该用户已注册')
                send('registered', '该用户已注册')
            } else {
                fs.appendFile(fileName, JSON.stringify(req.body) , function(err){
                    if(err){
                        //res.send('系统错误1')
                        send('file error', '系统错误1')
                    } else {
                        //res.send('恭喜，注册成功，请登录...')
                        send('success', '恭喜，注册成功，请登录...')
                    }
                })
            }
        })
    }


    fs.exists('user', function(ex){
        if( !ex ){
            fs.mkdirSync('user')
            saveFile()
        } else {
            saveFile()
        }


    })


})
//登录
app.post('/user/login', function(req, res){
//    验证当前用户是否存在，如果不存在，提示未注册，如果存在，密码错误
    function send(code, message){
        res.status(200).json({code, message})
    }
    console.log( req.body )
    var fileName = 'user/' + req.body.uname + '.txt'
    console.log( fileName )
    fs.exists(fileName, function(ex){
        if( !ex ){
            send('none', '该用户未注册')
        } else {
            fs.readFile(fileName, function(err, data){
                if( err ){
                    send('file error', '系统错误2')
                } else {
                    var user = JSON.parse(data)
                    if( user.password == req.body.password ){
                        res.cookie( 'uname', req.body.uname )
                        send('success', '登录成功')
                    } else {
                        send('sign fail', '密码错误')
                    }
                }
            })
        }
    })

})
//退出请求处理--清除cookie
app.get('/user/signout', function(req, res){
    res.clearCookie('uname')
    res.status(200).json({ 'code':'success' })
    //res.send('success')
})
//文件上传请求
app.post('/user/photo', uploads.single('photo'), function(req, res){
    res.send('上传成功')
})

//监听端口
app.listen(4000, function(){
    console.log( 'login-zhuce is running' )
})
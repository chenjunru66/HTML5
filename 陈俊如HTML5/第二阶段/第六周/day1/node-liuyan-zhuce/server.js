var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var cookieParser = require('cookie-parser')

var app = express()
var form = multer()

app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:false}))
app.use( cookieParser())
//注册
app.post('/user/zhuce',function(req,res){
    req.body.ip = req.ip
    req.body.date = new Date()

    function send(code,message){
        res.status(200).json({code,message})

    }

    var fileName = 'user/' + req.body.uname + '.txt'
    function saveFile() {
        fs.exists(fileName,function(ex){
            if(ex){
                send('registered','该用户已注册')
            }else{
                fs.appendFile(fileName,JSON.stringify(req.body),function(err){
                    if(err){
                        send('file error','系统错误1')
                    }else{
                        send('success','恭喜，注册成功，请登录...')
                    }
                })
            }
        })
    }

    fs.exists('user',function(ex){
        if(!ex){
            fs.mkdirSync('user')
            saveFile()
        }else{
            saveFile()
        }
    })


})

//登录

app.post('/user/denglu',function(req,res){

           function send(code,message){
               res.status(200).json({code,message})
           }

    var fileName = 'user/' + req.body.uname + '.txt'
    //console.log(fileName)
    fs.exists(fileName,function(ex){
        if(!ex){
            send('none','该用户未注册')
        }else{
            fs.readFile(fileName,function(err,data){
                if(err){
                    send('file error','系统错误2')
                }else{
                    var user = JSON.parse(data)
                    if( user.password == req.body.password){
                        res.cookie('uname',req.body.uname)
                        send('success','登录成功')
                    }else{
                        send('sign fail','密码错误')
                    }
                }
            })
        }
    })

})

//处理留言
app.post('/user/savemessage',form.array(),function(req,res){
    function send(code,message){
        res.status(200).json({code,message})
    }
    var infos = req.body
    var mess ={
        infos,
        date:new Date(),
        ip:req.ip
    }
    var str = JSON.stringify(mess)
    fs.exists('data',function(ex){
        if(!ex){
            fs.mkdirSync('data')
        }
        fs.appendFile('data/info.txt',str + ',',function(err){
            if(err){
                send('file error','文件保存失败')
            }else{
                send('success','文件保存成功')
            }
        })
    })
})

app.get('/user/savemessage',function(req,res){
    //function send(code,message){
    //    res.status(200).json({code,message})
    //}
    fs.exists('data',function(ex){
        if(ex){
            fs.readFile('data/info.txt',function(err,data){
                if(data){
                    res.send(data)
                }
                else{
                    res.send('不存在')
                }
            })
        }
    })

})

//退出请求处理--清除cookie
app.get('/user/signout',function(req,res){
    res.clearCookie('uname')//清空cookie
    res.status(200).json({'code':'success'})
})

//监听端口
app.listen(3000, function(){
    console.log( 'login-zhuce is running' )
})
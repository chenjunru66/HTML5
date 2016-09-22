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
//app.post('/user/savemessage',form.array(),function(req,res){
//    function send(code,message){
//        res.status(200).json({code,message})
//    }
//    var infos = req.body
//    var mess ={
//        infos,
//        date:new Date(),
//        ip:req.ip
//    }
//    var str = JSON.stringify(mess)
//    fs.exists('data',function(ex){
//        if(!ex){
//            fs.mkdirSync('data')
//        }
//        fs.appendFile('data/info.txt',str + ',',function(err){
//            if(err){
//                send('file error','文件保存失败')
//            }else{
//                send('success','文件保存成功')
//            }
//        })
//    })
//})
//
//app.get('/user/savemessage',function(req,res){
//    //function send(code,message){
//    //    res.status(200).json({code,message})
//    //}
//    fs.exists('data',function(ex){
//        if(ex){
//            fs.readFile('data/info.txt',function(err,data){
//                if(data){
//                    res.send(data)
//                }
//                else{
//                    res.send('不存在')
//                }
//            })
//        }
//    })
//
//})

//提问请求

app.post('/user/savemessage',function(req,res){
    //console.log(req.body)
//  把当前提问的内容保存在某个文件中，文件名以当前时间取名，便于查询及后期的回答
//    设置时间和IP
    var uname = req.cookie.uname
    var time1 = (new Date()).toLocaleDateString() +' '+ (new Date()).toLocaleTimeString()
    var time = new Date()
    console.log(time)
    req.body.ip = req.ip
    req.body.time = time1
    req.body.uname = uname
    //封装返回信息的方法
    function send(code,message){
        res.status(200).json({code,message})
    }
//    封装保存文件的方法
    function saveFile(){
    //    先设置文件名，以当前时间取名
        var fileName = 'questions/' + time.getTime() + '.txt'

        fs.appendFile(fileName,JSON.stringify(req.body),function(err){
            if(err){
                send('error','保存文件失败')
            }else{
                send('success','问题提交成功')
            }
        })
    }
//判断文件夹是否存在
    fs.exists('questions',function(ex){
        if(!ex){
            fs.mkdirSync('questions')
            saveFile()
        }else{
            saveFile()
        }
    })



})
//读取提问的内容信息
app.get('/user/savemessage',function(req,res){
    function send(code,message,questions){
    //    code:读取是否成功；message；是否成功相对应的信息；
    //    questions：读取的文件的内容的数据
        res.status(200).json({code,message,questions})
    }
    function reads(i,files,questions,cb){
        var filePath = 'questions/' + files[i]
        if(i < files.length){
            fs.readFile(filePath,function(err,data){
                if(err){
                    send('error','获取数据失败')
                }else{
                    questions.push(JSON.parse(data))
                }
                reads(++i,files,questions,cb)
            })
        }else{
            cb()
        }
    }

    fs.exists('questions',function(ex){
        if(!ex){
           send('error','文件系统错误')
        }else{
            fs.readdir('questions',function(err,files){
                if(err){
                    send('error','文件系统错误')
                }else{
                    var questions = []
                    var files = files
                    console.log(files)
                    reads(0,files,questions,function(){
                        send('success','数据获取成功',questions)
                    })
                }
            })
        }
    })
})

//处理回答页面的保存
app.post('/user/answer',function(req,res){
//    回答的内容保存在问题的文件内，如何与回答的那个问题联系起来
})


//退出请求处理--清楚cookie
app.get('/user/signout',function(req,res){
    res.clearCookie('uname')//清空cookie
    res.status(200).json({'code':'success'})
})

//监听端口
app.listen(3000, function(){
    console.log( 'login-zhuce is running' )
})
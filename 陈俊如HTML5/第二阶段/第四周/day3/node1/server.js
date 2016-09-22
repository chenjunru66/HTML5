// 引入express模块,可以快速创建一个网站
var express = require("express")

// 使用express函数创建一个实例对象
// 原生写法 var app = express(function(){
//           return new express()
//         })
var app = express()
// 通过一个中间件，每一个请求都会经过这个处理程序
// 将wwwroot设置为静态资源，默认打开静态资源网站页面是index.html
app.use(express.static('wwwroot'))
// 当用户访问当前页面的时候，数据返回浏览器
app.get('/user',function(req,res){
    // res.send('ajax is running')
    
    // 获取请求中的数据age，当前age在request的query属性中
    var age = req.query.age
    
    // status属性
    res.status(200).send(age)
})

// 绑定3000端口，启动服务器执行回调函数
app.listen(3000,function () {
    console.log('ajax is running')
})


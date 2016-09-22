$('#get').click(function(){
        var xmlhttp = new XMLHttpRequest()
        //当请求的状态readystate发生改变的时候，触发onreadystatechange事件
        xmlhttp.onreadystatechange = function(){
            switch ( xmlhttp.readyState){
                case 0:
                    console.log( 'xhr对象已创建，open方法未调用')
                    break;
                case 1:
                    console.log('open方法已调用')
                    break;
                case 2:
                    console.log('请求已接收，等待处理')
                    break;
                case 3:
                    console.log('请求处理中')
                    break;
                case 4:
                    console.log('请求已处理，响应已就绪')
                    //获取的是服务器返回的响应信息
                    console.log(xmlhttp.responseText)
                    //获取所有的响应头信息
                    console.log('响应头信息' + xmlhttp.getAllResponseHeaders() )
                    //获取的指定响应头信息
                    console.log('数据信息'+ xmlhttp.getResponseHeader('Content-Type'))
                    break;
                default:
                    break;
            }
        }
        xmlhttp.open('GET','/login')
        xmlhttp.send()
})
//   var a = '1'
//var  b = '2'
//console.log( a + b )//+为字符串连接或数字相加
//console.log( b + a )
//console.log( a - b )//隐式转换
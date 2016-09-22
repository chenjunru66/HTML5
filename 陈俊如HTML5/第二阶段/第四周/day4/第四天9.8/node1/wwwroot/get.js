var btnget = document.querySelector('#get')
// setTimeout( fn, time)

// function gets(){
//     var xmlhttp
//     if( window.XMLHttpRequest ){
//         xmlhttp = new XMLHttpRequest()
//     } else {
//         xmlhttp = new ActiveXObject()
//     }
//     console.log( xmlhttp.status )
// //    get请求的信息写在url路径上，即请求行中
// //    设置请求信 息 -- 用户设置发起的请求信息--包含请求的参数值，
//     xmlhttp.open('GET', '/login?name=lucy&pwd=123450')
//     xmlhttp.send()
    
//     xmlhttp.onreadystatechange = function(){
//         if( xmlhttp.readyState == 4 && xmlhttp.status == 200 ){
//             // console.log('发送成功')  
//         } 
//     }
    
// }
// btnget.addEventListener('click', gets)


// $.get(url, 参数, callback(data,status,xhr))
    //  -- url:发送请求的url地址
    //  -- {name:value}  发送的参数信息，连同url一起发送到服务器
            // 举例 http://localhost:3000/user?name=lucy&age=4
    //  -- callback -- 请求成功之后执行的回调函数(成功时才会调用)
                // data--响应返回的数据信息
                // status -- 响应的状态信息 status - 状态（"success"、"notmodified"、"error"、"timeout"、"parsererror"）
                // XMLHttpRequest对象
btnget.onclick = function(){
    // setTimeout(
    //     function(){
            $.get('/login', 
                { name:'lucy', pwd:'123456' },
                function(data, status){
                    console.log('请求成功')
                    console.log(data)
                    console.log(status)
                }
            )
        // }, 5000)
}

$("#post").click(function(){
    $.post('/login', 
            { name:'lucy', pwd:'12345' },
            function(data, status){
                console.log('Post请求成功')
                console.log(data)
                console.log(status)
            }
        )
})


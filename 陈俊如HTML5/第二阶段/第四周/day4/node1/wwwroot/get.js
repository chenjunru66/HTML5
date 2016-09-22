// var btnget = document.querySelector("#get")
// // setTimeout(fn,time)
// function gets(){
//     var xmlhttp
//     if( window.XMLHttpRequest ){
//         xmlhttp = new XMLHttpRequest()

//     }else{
//         xmlhttp = new ActiveXObject()
//     }
//     // get请求的信息写在url路径上，即在请求行中
//     // 设置请求信息--用户设置的发起的请求信息：包含请求的参数值；
//     xmlhttp.open('GET','/user?name=lucy&pwd=123456')
//     xmlhttp.send()

//     xmlhttp.onreadystatechange = function(){
//         if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//             console.log('成功发送')
//         }
//     }
// }


var btnget = document.querySelector("#get")
btnget.onclick = function () {
    // $.get(url,参数，callback(dat,status,xhr))
    // url:请求的url地址；
    // 参数：{name：value}发送的是参数信息，连同url一起发送到服务器 
    // 举例 http://lacalhost:3000/user?name=lucy&&age=4
    // callback：请求成功之后执行的回调函数(成功是才会调用)
    // data：响应返回的数据信息
    // status；响应的状态信息包含请求的状态（"success"、"notmodified"、"error"、"timeout"、"parsererror"）
    // xhr；XMLHttpRequest对象
    $.get('/user',
        { name: 'lucy', pwd: '123456' },
        function (data, status) {
            console.log('请求成功')
            console.log(data)
            console.log(status)
        })
}

$("#post").click(function(){
    $.post('/user',
    {name:'lucy',pwd:'123456'},
    function(data,status){
        console.log('Post请求成功')
        console.log(data)
        console.log(status)
    })
})



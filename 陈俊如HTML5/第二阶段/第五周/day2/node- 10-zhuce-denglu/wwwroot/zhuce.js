/**
 * Created by Administrator on 2016/9/13.
 */
//$('form').submit(function(ev){
//    ev.preventDefault()
//    var data = $('form').serialize()
//    console.log(data)
//    $.post('/ueser/login',data,function(res){
//        console.log('111')
//        console.log( res )
//
//    })
//})
var form = document.querySelector('form')
var xhr = new XMLHttpRequest()
var pwd1 = document.querySelector("#pwd1")
var pwd2 = document.querySelector('#pwd2')

form.onsubmit = function(ev){
    if( pwd1.value!== pwd2.value ){
        alert('两次密码输入不一致')
        return false
    }
    ev.preventDefault()
    //当请求的状态发生改变时，触发onreadystatechange事件
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){
            //console.log( xhr.responseText )

        }
    }

//    把form表单数据传递给formdata对象
    var data = new FormData(form)
//    设置请求类型及url路径
    xhr.open('post', '/user/login')
    xhr.send(data)
    alert('注册成功！！')
}
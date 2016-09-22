/**
 * Created by Administrator on 2016/9/11.
 */

var form = document.querySelector('form')
//阻止表单的默认行为，将当前数据信息传递给formdata对象
form.onsubmit = function(ev){
    //阻止提交的默认行为
    ev.preventDefault()
//    通过xhr自己提交数据 -- 发送请求信息
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){
            console.log( xhr.responseText )
        }
    }

    var data = new FormData(form)

    xhr.open( 'post', '/login' )
    xhr.send(data)
}

//function show( name, value ){
//    this.name = name
//    this.value = value
//}
//var i = show( 'username', 'lucy' )
/**
 * Created by Administrator on 2016/9/13.
 */
var form = document.querySelector('form')

form.onsubmit = function(ev){
//    阻止表单的默认行为
    ev.preventDefault()
//创建XHR对象
    var xhr = new XMLHttpRequest()
    //当请求的状态发生改变时，触发onreadystatechange事件
    xhr.onreadystatechange = function(){
       if( xhr.readyState == 4 ){
           //if( xhr.status == 200 ){
               console.log( xhr.responseText )
               document.querySelector('#box').style.visibility = 'visible'
               document.querySelector('#box').style.zIndex = '10'
               document.querySelector('.bottom').onclick  = function(){
                   location.href = '/'
               }
           //}
       }
    }
//    把form表单数据传递给formdata对象
    var data = new FormData(form)
//    设置请求类型及url路径
    xhr.open('post', '/saveMessage')
    xhr.send(data)

}
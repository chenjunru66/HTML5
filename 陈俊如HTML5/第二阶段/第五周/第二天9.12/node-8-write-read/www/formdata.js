/**
 * Created by Administrator on 2016/9/12.
 */
var form = document.querySelector('form')
var xhr = new XMLHttpRequest()
form.onsubmit = function(ev){
    //阻止表单的默认事件
    ev.preventDefault()
    //创建xhr对象

    //请求状态发生改变的时候触发onreadystatechange事件
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){
            console.log( xhr.responseText )
        }
    }
    //将表单数据传入formdata对象
    var data =  new FormData(form)
    //设置发送的请求，请求类型--请求路径
    xhr.open('post', '/login')
    //发送数据到服务器
    xhr.send(data)
}

//获取提交的信息
function result(){
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4  ){
            console.log( xhr.responseText )
            //服务器返回的数据类型是string
            //console.log( typeof  xhr.responseText )
            var text = xhr.responseText
            var ress = '[' + text.substr(0,text.length - 1 ) + ']'
            console.log( ress )

            var arr = JSON.parse(ress)
            console.log( arr )

        //   section > strong+strong + p
            var secinner = ''
            for( var i = 0; i < arr.length; i++ ){

                secinner += '<section> username: <strong>' + arr[i].body.username + '</strong> passward: <strong>' + arr[i].body.passward + '</sgrong> <p>' + arr[i].date + '</p> </section>'

            }
            document.querySelector('div').innerHTML = secinner
        }
    }





    xhr.open('get', '/login')
    xhr.send()

}

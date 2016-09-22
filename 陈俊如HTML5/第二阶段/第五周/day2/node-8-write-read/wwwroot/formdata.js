var form = document.querySelector('form')
var xhr = new XMLHttpRequest()
form.onsubmit = function (ev) {
    ev.preventDefault()
    // var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText)

        }
    }
    var data = new FormData(form)
    xhr.open('post', '/login')
    xhr.send(data)
}

// 获取提交的信息
function result() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText)
            // 把json数据转化为js对象
            // var mess = JSON.parse( xhr.responseText )
            // console.log(mess)
            // console.log(typeof xhr.responseText)
            // 服务器返回的数据是string
            var text = xhr.responseText
            var ress = '[' + text.substr(0, text.length - 1) + ']'
            console.log(ress)
            var arr = JSON.parse(ress)
            console.log(arr)
            //document.querySelector('div').innerHTML= '<section>' + arr[1].body.username + '</section>'
            for(var i = 0 ;i <arr.length;i++ ){
                arr[i].index = i

               document.querySelector('div').innerHTML += '<section>' + '姓名：'+arr[i].infos.name + '密码：' + arr[i].infos.pwd+ '日期:'+arr[i].date + 'IP:'+arr[i].ip+ '</section>'
                console.log(i)
            }
        }
    }

    // 发送请求
    xhr.open('get', '/login')
    xhr.send()
}
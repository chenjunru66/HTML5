/**
 * Created by Administrator on 2016/9/11.
 */


function formdata(){
    //创建xhr对象
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){
        // 返回的响应的信息
            console.log( xhr.responseText )
        }
    }

    //创建一个formdata对象
    var data = new FormData()
    //添加表单数据信息
    data.append('username', 'lucy')
    data.append('age', '10')



    xhr.open('post','/login')
    xhr.send(data)


}


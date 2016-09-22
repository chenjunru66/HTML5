var form = document.querySelector('form')
// 阻止表单的默认行为，将当前数据信息传递给formdata对象

form.onsubmit = function(ev){
    ev.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log(xhr.responseText)
        }
    }
    var data = new FormData(form)    
    xhr.open('post','/user')
    xhr.send(data)
}

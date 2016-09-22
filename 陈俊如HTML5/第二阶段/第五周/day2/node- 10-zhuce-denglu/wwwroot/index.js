/**
 * Created by Administrator on 2016/9/13.
 */
var xhr = new XMLHttpRequest();
var inp1 = document.querySelector('input')[0];
var inp2 = document.querySelector('input')[1];
var btn = document.querySelector('button')[0];
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //console.log(xhr.responseText);
            var text = xhr.responseText
            console.log(text)
            //  var ress = '['+ text.substr(0,text.length -1) + ']';
            //  var arr = JSON.parse(ress);
            //
            //  for(var i = 0 ;i< arr.length;i++){
            //      if(arr[i].infos.name == inp1.value && arr[i].infos.pwd == inp2.value){
            //         location.href = 'zhuce.html'
            //      }
            //      else{
            //          alert('用户名或密码输入错误，请重新输入!!!')
            //      }
            //  }
            //}
            //

        }

    }
    xhr.open('get', '/user/login')
    xhr.send()


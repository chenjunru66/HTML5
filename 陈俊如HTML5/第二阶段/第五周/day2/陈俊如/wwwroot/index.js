/**
 * Created by Administrator on 2016/9/13.
 */
var xhr = new XMLHttpRequest();
var inp1 = document.querySelectorAll('input')[0];
var inp2 = document.querySelectorAll('input')[1];
var btn = document.querySelectorAll('button')[0];
var p = document.querySelector('#wen')


    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            // console.log(xhr.responseText);
         var text = xhr.responseText
         console.log(text)
        var ress = '[' + text.substr(0,text.length - 1) + ']'
            var arr = JSON.parse(ress)
            // console.log(arr[0].infos.name) 
        //   console.log(inp1.value)
        btn.onclick = function(){
             if( inp1.value !== arr[0].infos.name || inp2.value !== arr[0].infos.pwd ){
                    p.innerHTML = '用户名或密码输入错误'
            //  console.log( '用户名或密码输入错误')
         }
         else{
             p.innerHTML = '登陆成功'
            console.log('登陆成功')
         }
        }
              
            }
         
            }
          
           xhr.open('get', '/user/login');
           xhr.send();

    


      

   

    


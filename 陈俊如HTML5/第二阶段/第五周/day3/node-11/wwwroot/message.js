$('form').submit(function(ev){
    ev.preventDefault()
    var data = $("form").serialize()
    //$.post( para2,data,cb)para1--请求的路径  data-- 待发送的数据 cb--回调函数 请求成功时并且服务器有响应数据时执行的函数  res--responseText：服务器返回的响应数据
    $.post('/login',data,function(res){
        console.log(res)
        $("#demo2").css({
            visiblity:'visible',
            zIndex:'10'
        })
        $(".bottom").click(function(){
            location.href = '/'
        })
    })
})/**
 * Created by Administrator on 2016/9/13.
 */

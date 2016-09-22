/**
 * Created by Administrator on 2016/9/13.
 */
$('form').submit(function(ev){
    ev.preventDefault()
    var data = $('form').serialize()
    console.log( data )
    console.log( typeof data )
    //$.post( para1, data, cb) para1--请求的路径； data--待发送的数据键值对
    //cb--  回调函数--请求成功时并且服务器有响应数据时执行的代码  res -- responseText 服务器返回的响应数据
    $.post('/saveMessage', data, function(res){
        console.log('111')
        console.log( res )
        $('#box').css({
            visibility:'visible',
            zIndex: '10'
        })
        $('.bottom').click(function(){
            location.href = '/'
        })
    })
})
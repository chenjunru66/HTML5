/**
 * Created by Administrator on 2016/9/19.
 */
$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    console.log(data)
    $.post('/user/login', data, function(res){
        //console.log(res)
        if( res.code == 'success' ){
            location.href = '/'
        } else {
            alert( res.message )
        }
    })
})
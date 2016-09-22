$(function(){
    $('form').submit(function(ev){
       ev.preventDefault();

        var pass = $(':password').map(function(){
            return $(this).val()
        })

        if( pass[0] == pass[1] ){
            console.log(' 两次的密码一致，可以提交内容 ')
            var data = $(this).serialize()
            $.post('/user/zhuce', data, function(res){
                console.log(res)
                console.log( typeof  res)
                //alert(res)
                //alert(res.message)
                //if( res.code == 'success' ){
                //    location.href = 'login.html'
                //}
            })
        } else {
            alert('两次的密码不一致，请重新输入')
        }


    })

})
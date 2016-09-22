/**
 * Created by Administrator on 2016/9/19.
 */
console.log( $.cookie() )
var uname = $.cookie('uname')

if(uname){
    $('header').empty()
    $('<h3><span>' + uname + '</span> <small>退出</small></h3>').appendTo('header')
    $('header small').click(function(){
        $.get('/user/signout', null, function(res){
            if(res.code == 'success'){
                location.href = '/'
            }
        })
    })
    $('header span').click(function(){
        location.href = '/user.html'
    })
}
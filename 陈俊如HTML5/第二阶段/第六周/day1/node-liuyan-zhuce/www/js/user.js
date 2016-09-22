var uname = $.cookie('uname')
if(uname){
    $('#use').empty().text(uname)
}

$('.dropdown-menu li:eq(1)').click(function(){
    $.get('/user/signout',null,function(res){
        if(res.code == 'success'){}
        location.href = '/'
    })
})

$('form').submit(function(ev){
    ev.preventDefault()
    var  data = $(this).serialize()
    $.post('/user/savemessage',data,function(req,res){
        //$('main button').click(function(){
        //    location.href = 'index.html'
        //})
        if(res.code == 'success'){}
        location.href = 'index.html'
    })
})
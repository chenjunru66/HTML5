$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/user/denglu',data,function(res){
        if(res.code == 'success'){
            location.href = '/'
            $('.modal-body').text(res.message)
        }else{
           $('.modal-body').text(res.message)
        }
    })
})
console.log($.cookie())
var uname = $.cookie('uname')
if(uname){
    $('.dropdown-menu').empty()
    $('#use').empty().text(uname)
    $('<li><a>个人资料</a></li><li><a>退出</a></li>').appendTo('.dropdown-menu')
}
    $('.dropdown-menu li:eq(1)').click(function(){
        $.get('/user/signout',null,function(res){
            if(res.code == 'success'){}
            location.href = '/'
        })
    })
$('#ask').click(function(){
    if(uname){
        location.href = 'user.html'
    }else{
        location.href = 'denglu.html'
    }
})
//$.get('/user/savemessage',function(data,res){
//          //$('main').html(data)
//    var mess = data
//    var info = '[' + mess.substr(0,mess.length - 1) + ']'
//    var arr = JSON.parse(info)
//    var sec = ''
//    console.log(arr)
//    for(var i = arr.length - 1;i >=0;i--){
//        arr[i].index = i
//
//        sec = sec + '<section><span>' + arr[i].infos.liuyan + '</span><p>' + arr[i].date + '</p></section>'
//    }
//    $('main').html(sec)
//    $('section').click(function(){
//        location.href = 'answer.html'
//    })
//})

$.get('/user/savemessage',null,function(res){
    var datas = res.questions
    var divs = ''
    //datas[i]每个文件的内容--文件的名称：按时间取名
    var times = datas[i].time
    var fileName = new Date(times).getTime()
    //console.log(res)
    //console.log(datas)
    for(var i = 0;i < datas.length;i++){
        divs += "<div class = 'main'questions =''"+ fileName + ">"
        divs += "<div class =' main-left'"
        divs += "<img src = 'uploads/" + datas[i].uname + '.jpg'
        divs += "</div>"
        divs += "<div class = main-right>"
        divs += "<h4>" + datas[i].uname + "</h4>"
        divs += "<p>" + datas[i].content + "</p>"
        divs += "<p>" + datas[i].time + "</p>"
        divs += "</div>"
        divs += "</div>"
    }
    $('main').html(divs)
    $('.main').click(function(){
        //设置某个cookie值，获取到当前点击文件的文件名称
        $.cookie('question',$(this).attr('questions'))
        location.href = 'answer.html'
    })
})




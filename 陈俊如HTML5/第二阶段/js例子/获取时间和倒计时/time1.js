
var now = new Date();
var seconds = now.getSeconds();
var minutes = now.getMinutes();
var years = now.getFullYear();
var months = now.getMonth();
var days = now.getDay();
// getDay()就是当前日期在一周中的哪一天
var hours = now.getHours() % 12;
var miaozhen = document.getElementById('miaozhen');
var fenzhen = document.getElementById('fenzhen');
var shizhen = document.getElementById('shizhen');

var s = -60 - seconds;
var m = -60 * 60 - minutes * 60 - seconds;
var h = -12 * 60 * 60 - hours * 60 * 60 - minutes * 60 - seconds;
miaozhen.style.animationDelay = s + 's';
fenzhen.style.animationDelay = m + 's';
shizhen.style.animationDelay = h + 's';

// var demo1 = document.getElementById('demo1');
// var demo2 = document.getElementById('demo2');
// var demo3 = document.getElementById('demo3');

function calc() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var years = now.getFullYear();
    var months = now.getMonth();
    var day = now.getDay();
    var days = now.getDate();
    var hours = now.getHours() % 24;
    var a = hours ;
    var b = minutes;
    var c = seconds;

    if (b < 10) {
        if (c < 10) {
            document.getElementById("demo1").innerHTML = a + ':' + '0' + b + ':' + '0' + c;
        }
        else {
            document.getElementById("demo1").innerHTML = a + ':' + '0' + b + ':' + c;
        }

    }
   
    else {
        if (c < 10) {
            document.getElementById("demo1").innerHTML = a + ':' + b + ':' + '0' + c;
        }
        else {
            document.getElementById("demo1").innerHTML = a + ':' + b + ':' + c;
        }

    }

    var d = years;
    var e = months + 1;
    var f = days;
    var g = day;
    switch (g) {
        case 0:
            document.getElementById('demo3').innerHTML = '星期天';
            break;
        case 1:
            document.getElementById('demo3').innerHTML = '星期一';
            break;
        case 2:
            document.getElementById('demo3').innerHTML = '星期二';
            break;
        case 3:
            document.getElementById('demo3').innerHTML = '星期三';
            break;
        case 4:
            document.getElementById('demo3').innerHTML = '星期四';
            break;
        case 5:
            document.getElementById('demo3').innerHTML = '星期五';
            break;
        case 6:
            document.getElementById('demo3').innerHTML = '星期六';
            break;
    }
    document.getElementById("demo2").innerHTML = d + '年' + e + '月' + f + '日';
}

setInterval(calc, 1000);




// Date()日期方法
var now = new Date();
// alert(now);
// 获取当前的秒钟，按秒计
var seconds = now.getSeconds();
var minutes = now.getMinutes();
// 24小时，%取余
var hours = now.getHours() % 12;
// alert(seconds);
// 获取秒钟指针的父级标签
var miaozhen = document.getElementById('miaozhen');
var fenzhen = document.getElementById('fenzhen');
var shizhen = document.getElementById('shizhen');
//创建变量赋予获取当前animation-delay的值
var s = -60 - seconds;
var m = -60 * 60 - minutes * 60 - seconds;
// 因为分针在转的时候，回影响时针也需要转
var h = -12 * 60 * 60 - hours * 60 * 60 - minutes * 60 - seconds;
// 驼峰命名法，除了第一个单词首字母小写，其他后面的单词大写
// 标签名称.style.样式名称 =样式值；
miaozhen.style.animationDelay = s + 's' ;
fenzhen.style.animationDelay = m + 's' ;
shizhen.style.animationDelay = h + 's' ;
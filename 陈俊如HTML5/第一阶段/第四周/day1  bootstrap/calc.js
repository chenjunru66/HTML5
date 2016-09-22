// 先获取表单、按钮、计算区域的标签
// 通过标签名获取第几个标签
var form = document.getElementsByTagName('form')[0];
var button = document.getElementsByTagName('button')[0];
var section = document.getElementsByTagName('section')[0];
// function:创建函数，名称自定义
function hide() {
    section.style.display = 'none';
}
// 给form监听事件,addEventListener(event(事件名称),function（函数）)
form.addEventListener('input',hide);
button.addEventListener('click',calc);
// 计算方法
function calc() {
    // 获取输入的数值，
    var jishu = document.getElementById('jishu').value;
    var jixiao = document.getElementById('jixiao').value;
    var jiangjin = document.getElementById('jiangjin').value;
    // 数据类型转换，浮点数;parsefloat():解析字符串，返回浮点数的值
    jishu = parseFloat(jishu);
    jixiao = parseFloat(jixiao);
    jiangjin = parseFloat(jiangjin);
    section.style.display = 'block';
    
    var zonge = jishu + jixiao + jiangjin;
    alert(zonge);
    // NaN：not a number；如果不是数字，代码执行到这，之后的代码不再执行；
    if( isNaN(zonge) ) return;
    if( zonge < 2000){
        alert('你的工资低于平均水平！');
        return;
    }
    // innerHTML 标签内部的内容
    document.getElementById('zonge').innerHTML = zonge.toFixed(2);
    section.style.display = 'block';    
    
    // alert(jishu);
    // alert(jixiao);
    // alert(jiangjin);
    // var jishu = typeof(jishu);判断获取数值的数据类型
}

var timer
var count = 0;//点击的次数

function active() {
    count++

    if (count % 2 != 0) {
        // 获取两个span标签,通过标签名称获取
        var span1 = document.getElementsByTagName('span')[0]
        var span2 = document.getElementsByTagName('span')[1]
        // 获取标签内部的内容
        var num1 = span1.innerHTML
        var num2 = span2.innerHTML
        // console.log(num1)
        // alert(num1) 输出当前获取的内容

        // setInterval( function,time)  每隔一秒，执行function函数  每隔1s ，span2标签内部的数字减一；
        function calc() {
            // 思路：
            // 1.先让秒针自减
            // 2.判断，当秒钟小于0的时候，分钟减1，秒钟重新赋值，再自减
            // 3.判断：分钟小于0的时候，停止计时，分钟不再改变
            //4.点击的时候倒计时
            num2--
            if (num2 < 0) {
                num1--
                if (num1 < 0) {
                    return
                }
                num1 = num1 < 10 ? '0' + num1 : num1
                span1.innerHTML = num1
                num2 = 59
            }
            num2 = num2 < 10 ? '0' + num2 : num2 //三元运算符
            span2.innerHTML = num2
        }
 
        timer = setInterval(calc, 1000)
    }
    // 清除interval
    else {
        clearInterval(timer)
    }
}

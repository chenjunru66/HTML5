window.onload = function () {
    var oArray = [
        '元旦：1月1日至3日放假三天',
        '春节：2月2日至8日放假7天。',
        '妇女节：3月8日妇女节，与我无关。',
        '清明节：4月3日至5日放假3天',
        '劳动节：4月30日至5月2日放假3天。',
        '端午节：6月4日至6日放假3天。',
        '小暑：7月7日小暑。不放假。',
        '七夕节：8月6日七夕节。不放假。',
        '中秋节：9月10日至12日放假3天。',
        '国庆节：10月1日至7日放假7天。',
        '立冬：11月8日立冬。不放假。',
        '艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。'
    ]
    
    var i = 0
    var li = document.getElementsByTagName('li')
    // 获取数组中所有的元素内容以及索引值
    for (i = 0; i < oArray.length; i++) {
        li[i].index = i
        li[i].onclick = function () {
            for (i = 0; i < oArray.length; i++) {
                // 去掉li样式
                li[i].className = ''
            } 
            // this指的是，调用函数的那个对象
            // index：可返回下拉列表中选项的索引位置[]内部的内容
            this.className = 'active'      
            document.getElementById('msg').innerHTML = '<h2>' +(this.index+1)+'月'+'</h2>'+'<p>' + oArray[this.index] + '</p>'
        }
    }
}









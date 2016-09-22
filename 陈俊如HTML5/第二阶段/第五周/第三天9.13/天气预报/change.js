/**
 * Created by Administrator on 2016/9/13.
 */
//$.ajax(
//    'http://apis.baidu.com/3023/weather/weather?id=101180101',
//    {
//
//        headers : {
//            apikey : '553c3b05951e2bef05021919230b872f'
//        },
//        success : function(data){
//            //console.log(data)
//            var datas = JSON.stringify(data)
//            //获取天气信息
//            var weather = data.weather
//        //    获取当前的天气信息
//            var infos = weather[0].info
//            var mintem = infos.night[2]
//            //console.log( mintem )
//            var maxtem = infos.day[2]
//            var rain = infos.day[1]
//            var wind = infos.day[4]
//
//        }
//    }
//)

// $.getJSON( 'http://api.map.baidu.com/telematics/v3/weather?callback=?',{
//    location:'郑州市',
//    ak : '7ceFjMpSySjL6DNnt1co9AuiERxBGCDM',
//    output : 'json'
// }, function(data){
//    console.log(data)
//    console.log( JSON.stringify(data) )

// })
$.ajax('http://apis.baidu.com/rtbasia/ip_district/ip_district?ip=171.8.202.55',{
    headers:{
       apikey : '553c3b05951e2bef05021919230b872f'
    },
    success : function(data){
        console.log(data)
    }
})

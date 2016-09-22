
    console.log('--------开始读取文件--------');  
    var express = require('express') 
    var fs= require('fs');  
    var app = express()
app.use(express.static('wwwroot'))
    fs.readFile('data/info.txt','utf-8',function(err,data){  
        if(err){  
            console.log(data);  
        }else{  
            console.log(data);  
             
        }  
    })  
      
    console.log('--------读取结束--------');  
app.listen(1000,function(){
    console.log('ajax is running')
})



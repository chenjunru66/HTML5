var xmlhttp
function show() {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest()
    }else{
        xmlhttp = new ActiveXObject()
    }  
     xmlhttp.open( "GET",'info.txt',true )             
                xmlhttp.send()               
                xmlhttp.onreadystatechange = function(){     
                    if( xmlhttp.readyState == 4 && xmlhttp.status == 200){
                        document.querySelector("#demo").innerHTML = xmlhttp.responseText
                    }
                }
}

var fen = document.getElementById('fen');
var miao = document.getElementById('miao');
var i = 10;
var j = 2;
var int 
function calc() {   
    if( i == 0){
               miao.innerHTML = '0' + i;
               i = 60;               
               i--;              
               j--;
               fen.innerHTML = '0' + j;                              
               if( j < 0){
               j = j - j;
               i = 0;
               fen.innerHTML = '00';
               miao.innerHTML = '0' + i;
           }  
               
           }
           else if( i > -1 && i < 10){
               miao.innerHTML = '0' + i;
               i--;                       
           }
                    
           else {
               miao.innerHTML = i;
               i--;
           }
       } 
function start() {
    
     int = setInterval(calc,1000);
}

function stop() {
     clearInterval(int);
}
                

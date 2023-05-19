var seconds=00
var tens=00
var appendSeconds=document.getElementById("seconds")
var appendTens=document.getElementById("tens")
var btnstart=document.getElementById("btnstart")
var btnstop=document.getElementById("btnstop")
var btnreset=document.getElementById("btnreset")
var interval;



btnstart.addEventListener("click",function(){
    clearInterval(interval)
   interval= setInterval(startTimer,10)
    
})
btnreset.addEventListener("click",function(){
  
    clearInterval(interval)
    tens=00
    seconds=00
    appendSeconds.innerHTML=seconds
    appendTens.innerHTML=tens
})
btnstop.addEventListener("click",function(){
  clearInterval(interval)
})
function startTimer(){
    tens=tens+1
    if(tens<9){
        appendTens.innerHTML="0"+tens

    }
    if(tens>99){
        seconds=seconds+1
        appendSeconds.innerHTML=seconds 
        tens=0
    }
    if(seconds<9){
        appendSeconds.innerHTML="0"+seconds 

    }
    appendTens.innerHTML=tens
   
   
}
var currentpos,timer; 
function initialize() 
{ 
timer=setInterval("scrollwindow()",20); //设置滚动速度，数值越大，滚动越慢
} 
function sc(){ 
clearInterval(timer); 
} 
function scrollwindow() 
{ 
currentpos=document.body.scrollTop; 
window.scroll(0,++currentpos); 
if (currentpos != document.body.scrollTop) 
sc(); 
} 
document.onmousedown=sc 
document.ondblclick=initialize 


(function (){

    function browserResize(){
    
    var w=window.innerWidth;//获取浏览器窗口宽度
    
    if(w>450){
    
             document.documentElement.style.fontSize=w/1920*100+"px";
    
    }}
    
    browserResize();
    
    var browserTimer;
    
    window.addEventListener("resize",function(){
    
    clearTimeout(browserTimer);
    
    browserTimer=setTimeout(browserResize,200)
    
    })
    
    })()

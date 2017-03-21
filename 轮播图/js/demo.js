/**
    * Created by ${痴心布偶} on 2017/3/21.
    */
var i=0;var timer;
$(function(){
   $(".ig").eq(0).show().siblings().hide();
  showTime();
    $(".tabs").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);/*清除轮播图*/
    },function(){
        showTime();
    });
    $(".btn1").click(function(){
        clearInterval(timer);
        if(i===0){
            i=5;
        }
        i=i-1;
        show();
        showTime();
    });
    $(".btn2").click(function(){
        clearInterval(timer);
        if(i===5){
            i=-1;
        }
        i=i+1;
        show();
        showTime();
    });
});
function show(){
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tabs").eq(i).addClass("bg")
        .siblings().removeClass("bg");
}
function showTime(){
    timer=setInterval(function(){
        i+=1;
        if(i===6){
            i=0;
        }
        show();
    },2000);
}
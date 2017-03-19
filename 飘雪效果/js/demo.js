/**
 * Created by 痴心布偶 on 2017/3/19
 */
/*
* 1、雪片产生的时候距离浏览器左边的距离是随机的。
* 2、雪片下降的速度是随机的。
* 3、雪片大小是随机的。
* 4、雪片下落后距离浏览器左边的距离是随机的（在视窗产生飘的状态）。
* 5、雪片的透明度是随机的*/
var minSize=5;/*雪花最小*/
var maxSize=50;
var newMs=200;/*单位是毫秒*多少毫秒产生一个,时间越小，雪越大*/
var flakeColor="#FFF";
/*为页面加入雪花*/
/*var flake=$("<div></div>").
css({"position":"absolute","top":"50px"}).html("*");*/
    var flake=$("<div></div>").
css({"position":"absolute","top":"50px"}).html("<img src='img/mm8.jpg' style='width:80px'/>");
$(function(){
    var documentHeight=$(document).height();
    var documentWidth=$(document).width();
    setInterval(function(){
        var startPosLeft=Math.random()*documentWidth;
        var startOpacity=0.7+Math.random()*0.3;/*开始时为0.7*/
        var endPosTop=documentHeight;
        var flakeSize=minSize+Math.random()*maxSize;
        var endPosLeft=Math.random()*documentWidth;
        var durationFall=2000+Math.random()*3000;/*2-5second*/
       /**复制雪片=》给网页=》雪片的样式是css（）；**/
        flake.clone().appendTo("body").css({/*初始状态*/
            'left':startPosLeft,
            "opacity":startOpacity,
            "color":flakeColor,
            "font-size":flakeSize
        }).animate({/*雪花结束时的状态*/
          "top":endPosTop,
            "left":endPosLeft,
            "opacity":0.5
        },durationFall,function(){$(this).remove();});/*在durationFall时间内从初始状态到结束时状态*/
  /*回调函数把当前对象清除（防止雪花满屏）*/
    },newMs);

});

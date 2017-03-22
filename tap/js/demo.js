/**
    * Created by ${痴心布偶} on 2017/3/22.
    */
window.onload=function(){
  //noinspection JSDuplicatedDeclaration
    <!--var vLi=document.getElementsByTagName("li");
  var con=document.getElementsByClassName("con");
-->
var tab=document.getElementsByClassName("tab");
var vLi=tab[0].getElementsByTagName("li");
var con=tab[0].getElementsByClassName("con");
    for(var j=0;j<vLi.length;j++){
      //noinspection JSDuplicatedDeclaration
        /*作为一个变量，只保存循环后的最终值，其他值将被覆盖，
        要用一个中间变量来保存每次循环的j值。
        */
        vLi[j].xuHao=j;
      vLi[j].onclick=function(){
          for(var i=0;i<con.length;i++) {
              <!--点击后先隐藏元素-->
              con[i].style.display = "none";
          }
          /* 点击后显示相应的对象，同时先隐藏其他元素*/
          con[this.xuHao].style.display="block";
      }
  }
};
/*stop(true)结束animate()有缓冲效果；
   *stop(true,true)立即到达animate()的目标状态，无缓冲效果。
   * siblings()接受可选的选择器表达式，与我们向$()函数中传递的参数类型相同，
   *则将通过检测元素是否匹配该选择器对元素进行筛选。
  **/
  $(function(){
  $(".pic ul li").mouseover(function(){
   $(this).stop(true).animate({width:"400px"},1000).
   siblings("li").animate({width:"100px"},1000);
   })

   });
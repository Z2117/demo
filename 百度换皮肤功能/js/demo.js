/**
    * Created by Administrator on 2017/3/20.
    */

    function showImgBox() {
        //noinspection JSUnresolvedFunction
    $("#imgBox").slideDown();
    }
    function hideImgBox(){
        //noinspection JSUnresolvedFunction
        $("#imgBox").slideUp();
    }
    /*对class=imgItem下的img标签执行点击事件*/
//noinspection JSUnresolvedFunction
$(function(){
    //noinspection JSValidateTypes,JSUnresolvedVariable
    if($.cookie("bg-pic")==""||$.cookie("bg-pic")==null){
        //noinspection JSUnresolvedFunction
        $("body").css({"background-image":"url(image/j1.jpg)"});
    }else{
        //noinspection JSUnresolvedFunction,JSValidateTypes,JSUnresolvedVariable
        $("body").css({"background-image":"url('"+$.cookie("bg-pic")+"')"});
    }
//noinspection JSUnresolvedFunction
    /**如果文件jquery.js放在demo.js后面则报错：$未定义。
  *所以在demo。js文件中jquery.js要放在demo.js之前。
 */
    $(".imgItem img").click(function () {
        //noinspection JSUnresolvedFunction
        var src=$(this).attr("src");
        /*获取点击的图片的路径src值*/
        //noinspection JSUnresolvedFunction
        $("body").css({"background-image":"url("+src+")"});
        //noinspection JSValidateTypes,JSUnresolvedVariable
        //cookie默认保存在浏览器中，当浏览器关闭时，cookie不再存在。
        //cookie设置值的话，其值保存在本地文件中，
        // 浏览器关闭后，cookie不会消失，直到到达设定的时间或人为删除。
        //noinspection JSValidateTypes,JSUnresolvedVariable
        $.cookie("bg-pic",src,{expires:1})
        //expires:1代表有效期为1天
    });
});

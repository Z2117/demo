/*封装函数*/
function $(id){return document.getElementById(id)}
/*页面加载完成之后执行*/
window.onload=function(){
    var timer=null;
    /*文档加载完成，输入框自动获得焦点*/
    var text=$("text").focus();

    /*声明一个数组接收弹幕内容div数组的各个元素的起始位置*/
    var newarr=[];
    $("submit").onclick=function(){
        /*清除定时器**否则每触发一次速度加快一次*/
        clearInterval(timer);

        /*获取输入内容*/
        var text=$("text").value;
        /*创建新节点*/
        var newnode=document.createElement("div");
        /*把输入框的内容传入新节点*/
        newnode.innerHTML=text;
        /*新节点的位置，即弹幕内容出现的起始地址*/
        newnode.style.top=Math.random()*($("tm").offsetHeight-20)+"px";
        newnode.style.left="600px";
        /*控制台输出randomColor*/
        console.log("'"+randomColor()+"'");
        /*新节点字体颜色*/
        newnode.style.color="#"+randomColor();
        /*新节点进入弹幕*/
        $("tm").appendChild(newnode);
        /*定时器规定弹幕内容运动速度*/
        timer=setInterval(move,6);
        /*清空输入框*/
        var text=$("text").value="";
        var text=$("text").focus();

    };
    function move(){
        /*获得弹幕内容容器*/
        var arr=$("tm").getElementsByTagName("div");
        for(var i=0;i<arr.length;i++){
            /*声明一个数组接收弹幕内容div数组的各个元素的起始位置*/

            newarr.push(arr[i].offsetLeft);
            /*newarr[i]--,再赋值给arr[i],使弹幕内容向左移动*/
            arr[i].style.left=newarr[i]+"px";
            newarr[i]--;
            /*当弹幕内容到达终点（超出弹幕墙左边框将被隐藏*overflow:hidden)
            时，再把它放回起始位置
             */
            if(newarr[i]<0){
                newarr[i]=600;
            }
        }
    }

    function randomColor() {
        var color = Math.ceil(Math.random( ) * 16777215).toString(16);

        /*不足六位，补足*/
        while(color.length<6){

            color="0"+color;
        }

        return color;
    }
};
/*语法
 1.NumberObject.toString(radix)
 参数	描述
 radix	可选。规定表示数字的基数，使 2 ~ 36 之间的整数。
 若省略该参数，则使用基数 10。但是要
 注意，如果该参数是 10 以外的其他值，
 则 ECMAScript 标准允许实现返回任意值。
 返回值
 数字的字符串表示。例如，当 radix 为 2 时,
 NumberObject 会被转换为二进制值表示的字符串。

2.*******offsetLeft*********
 HTMLElement.offsetLeft 是一个只读属性，返回当前元素左上角相对于
 HTMLElement.offsetParent 节点的左边界偏移的像素值。

 对块级元素来说，offsetTop、offsetLeft、offsetWidth 及
 offsetHeight 描述了元素相对于 offsetParent 的边界框。

 *****left*****
  *  属性规定元素的左边缘。该属性定义了定位元素左外边距边界
 与其包含块左边界之间的偏移。

 如果 position 属性的值为 static，那么设置 left 属性
 不会产生任何效果。


 ******随机颜色值的获得：*******
 *16进制
 ****先将hex最大值0xffffff(字符串形式转为16进制）转为10进制*****
 var ff=parseInt("0xffffff",16).toString(10);
 alert(ff);等于16777215
 ***Math.random()*16777215获得0x000000-0xffffff之间的值。
 * var getRandomColor = function(){
 return '#'+(function(h){
 return new Array(7-h.length).join("0")+h
 })((Math.random()*0x1000000<<0).toString(16))
 }
 修正上面版本的bug（无法生成纯白色与hex位数不足问题）。
 0x1000000相当0xffffff+1，确保会抽选到0xffffff。
 在闭包里我们处理hex值不足6位的问题，直接在未位补零。
 *
 *
 * ****** 如果前缀为 0，则 JavaScript 会把数值常量解释为八进制数，
 如果前缀为 0 和 "x"，则解释为十六进制数。
 **
 *
 *
 * 如需改变 HTML 元素的属性，请使用这个语法：
 document.getElementById(id).attribute=new value;
 ******
 *
 * 修改 HTML 内容的最简单的方法时使用 innerHTML 属性。
 如需改变 HTML 元素的内容，请使用这个语法：
 document.getElementById(id).innerHTML=new HTML
 ***
 *
 * 在 JavaScript 中，document.write() 可用于直接向 HTML 输出流写内容。

 提示：绝不要使用在文档加载之后使用 document.write()。这会覆盖该文档。

 修改 HTML 内容的最简单的方法时使用 innerHTML 属性。

 如需改变 HTML 元素的内容，请使用这个语法：

 document.getElementById(id).innerHTML=test HTML
 或者这么用：

 <script>
 var element=document.getElementById(id);
 element.innerHTML="test";
 </script>
 其实他们两个是一个意思。
 如需改变 HTML 元素的属性，请使用这个语法：

 document.getElementById(id).attribute=new value
 比如这个

 <!DOCTYPE html>
 <html>
 <body>

 <img id="image" src="/img/one.png" />

 <script>
 document.getElementById("image").src="/img/two.png";
 </script>

 <p>原图片是one.png，但是已被修改two.png</p>

 </body>
 </html>
 如需改变 HTML 元素的样式，请使用这个语法：

 document.getElementById(id).style.property=new style
 比如这个：

 <p id="p1">test!</p>

 <script>
 document.getElementById("p1").style.color="red";
 </script>
 假如本来的是黑色的字体，现在已经改变了元素的样式，把字体变成红色了。
 *
 ******
 *
 * 输入框获得焦点
 * tml页中有一个id为currentInput的input标签，现在让其自动获取焦点。

 let current = document.getElementById('currentInput');
 //第一种，直接用focus()方法，有时候会不起作用
 current.focus();
 //第二章，延迟执行focus方法，一直都能获取成功
 setTimeout(function () {
 current.focus();
 },50);
 *
 *
 */

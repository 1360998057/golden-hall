<table width="100%" border="0" height="80" align="center" cellpadding="0" cellspacing="0" style="background:#202020;">
  <tr>
    <td align="center" class="baise">
	<div><%=w78_copyright%> <a href="http://www.miibeian.gov.cn/" target="_blank"><%=w78_beian%></a> <a href="http://www.93baidu.com" target="_blank">Technical support：93BAIDU</a></div>
	</td>
  </tr>
</table>


<script type="text/javascript" src="/img/dd.js"></script>
<script type="text/javascript" src="/img/jquery.event.drag-1.5.min.js"></script>
<script type="text/javascript" src="/img/jquery.touchSlider.js"></script>
<script type="text/javascript">
$(document).ready(function () {
$(".main_visual").hover(function(){
$("#btn_prev,#btn_next").fadeIn()
},function(){
$("#btn_prev,#btn_next").fadeOut()
})
$dragBln = false;
$(".main_image").touchSlider({
flexible : true,
speed : 200,
btn_prev : $("#btn_prev"),
btn_next : $("#btn_next"),
paging : $(".flicking_con a"),
counter : function (e) {
$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
}
});
$(".main_image").bind("mousedown", function() {
$dragBln = false;
})
$(".main_image").bind("dragstart", function() {
$dragBln = true;
})
$(".main_image a").click(function() {
if($dragBln) {
return false;
}
})
timer = setInterval(function() { $("#btn_next").click();}, 5000);
$(".main_visual").hover(function() {
clearInterval(timer);
}, function() {
timer = setInterval(function() { $("#btn_next").click();}, 5000);
})
$(".main_image").bind("touchstart", function() {
clearInterval(timer);
}).bind("touchend", function() {
timer = setInterval(function() { $("#btn_next").click();}, 5000);
})
});
</script>
<script type="text/javascript"> 
   <!--
(function($){
$.fn.extend({
    Scroll:function(opt,callback){
        //参数初始化
        if(!opt) var opt={
};
        var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
        var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
        var timerID;
        var _this=this.eq(0).find("ul:first");
        var   lineH=_this.find("li:first").height(), //获取行高
            line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
            speed=opt.speed?parseInt(opt.speed,10):1000; //卷动速度，数值越大，速度越慢（毫秒）
            timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
        if(line==0) line=1;
        var upHeight=0-line*lineH;
        //滚动函数
        var scrollUp=function(){
            _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
            _this.animate({
                marginTop:upHeight
            },speed,function(){
                for(i=1;i<=line;i++){
                    _this.find("li:first").appendTo(_this);
                }
                _this.css({marginTop:0});
                _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
            });
 
        }
        //Shawphy:向下翻页函数
        var scrollDown=function(){
            _btnDown.unbind("click",scrollDown);
            for(i=1;i<=line;i++){
                _this.find("li:last").show().prependTo(_this);
            }
            _this.css({marginTop:upHeight});
            _this.animate({
                marginTop:0
            },speed,function(){
                _btnDown.bind("click",scrollDown);
            });
        }
        //Shawphy:自动播放
        var autoPlay = function(){
            if(timer)timerID = window.setInterval(scrollUp,timer);
        };
        var autoStop = function(){
            if(timer)window.clearInterval(timerID);
        };
         //鼠标事件绑定
        _this.hover(autoStop,autoPlay).mouseout();
        _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
        _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);
 
    }   
})
})(jQuery);
 
$(document).ready(function(){
    $("#new_l_title").Scroll({line:1,speed:1000,timer:5000,up:"btn1",down:"btn2"});

});
//-->

</script>

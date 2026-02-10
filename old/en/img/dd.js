$(function() {
	window.onscroll = function() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if (top>=35) {
			$(".ddHeader").addClass("fixedHeader");

			var padding = 20 - Math.floor((top - 35)/2);

			padding = padding>=0 ? padding+4 : 4;

			$(".header .logo").css("padding-top", padding);
			$(".header .logo").css("padding-bottom", padding);
			$(".headNav a").css("padding-top", padding);
			$(".headNav a").css("padding-bottom", padding);
			$(".headSearch").css("padding-top", padding+9);
		} else {
			$(".ddHeader").removeClass("fixedHeader");
			$(".header .logo").css("padding-top", 24);
			$(".header .logo").css("padding-bottom", 24);
			$(".headNav a").css("padding-top", 24);
			$(".headNav a").css("padding-bottom", 24);
			$(".headSearch").css("padding-top", 33);
		}
	}

  
	var curNavId;
	var subnavTimer;
	var url = document.URL;
	var navRgExp = {
		"aboutusNav": /\/aboutus/
		
	}
	for (var i in navRgExp) {
		if (navRgExp[i].test(url)) {
			curNavId = i;
			break ;
		}
	}

	$(".headNav li").hover(function() {
		clearInterval(subnavTimer);
		var index = $(this).index();
		if (index == 6) {
			$(".headNav li").removeClass("cur");
			$(".subNav div[dataType=subnav]").hide();
			return;
		}

		$(this).addClass("cur").siblings("li").removeClass("cur");

		$(".subNav div[dataType=subnav]").eq(index).slideDown(300).siblings("div[dataType=subnav]").stop().hide();
	}, function() {
		var that = $(this);
		subnavTimer = setTimeout(function() {
			var index = that.index();
			that.removeClass("cur");
			$(".subNav div[dataType=subnav]").eq(index).hide();
			$("#" + curNavId).addClass("cur");
		}, 100);
	});

	$(".subNav div[dataType=subnav]").hover(function() {
		clearInterval(subnavTimer);
	}, function() {
		var that = $(this);
		subnavTimer = setTimeout(function() {
			var index = that.index();

			$(".headNav li").eq(index).removeClass("cur");
			$("#" + curNavId).addClass("cur");
			that.hide();
		}, 100);
	});
	
	//--
	var doIndex = 0;
	$(".Down").click(function(){
		if(doIndex){
			$(".procon").css({marginTop:"30px"});
			$(".conInner").animate({top:"-104px"},300).dequeue();
			$(".Down").css({top:0,bottom:"auto"});
			doIndex = 0;	
		}else{
			$(".procon").css({marginTop:"0"});
			$(".conInner").animate({top:"0"},300).dequeue();
			$(".Down").css({top:"auto",bottom:0});
			doIndex = 1;
		}
 
	})
})
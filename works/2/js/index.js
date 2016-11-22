document.addEventListener("DOMContentLoaded",function(){
	document.documentElement.style.fontSize=2*20*document.documentElement.clientWidth/640+"px";
	(function(win,doc){
		function change(win,doc){
			document.documentElement.style.fontSize=document.documentElement.clientWidth/16+"px";
		};
		doc.addEventListener("DOMContentLoaded",change,false);
		win.addEventListener("resize",change,false);
	})(window,document);
},false);
$(function(){
	var n=0;
	var iNow=0;
	var H=$(window).height();

	$("#box").css("height",H+"px");
	$(".every").css("height",H+"px");
	$(".box_con").css("height",4*H+"px");
	$("#box").on("swipeUp",function(ev){
		$(".box_con").animate({"margin-top":-H+"px"},1000,function(){
			$(".box_con").css("margin-top",0);
			$(".box_con .every:first").remove().clone(true).appendTo(".box_con");
		});
		
	});
	
});
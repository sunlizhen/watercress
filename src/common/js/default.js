window.onload = function(){
	//设置页面中rem的值；
	var html = document.documentElement;
	var clientWidth = 375;
	var fontSize = 17;
	var newFontSize = html.clientWidth*fontSize/clientWidth;
	html.style.fontSize = newFontSize+'px'; 
	//title点击搜索；
	$(".con_search").click(function(){
		$(".TalionNav-secondary").show();
	})
	$(".close-nav").click(function(){
		$(".TalionNav-secondary").hide();
	})
	
}

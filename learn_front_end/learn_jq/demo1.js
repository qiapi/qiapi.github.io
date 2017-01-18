/*$(".footer div").on("click",function(e) {
	$(this).siblings().removeClass("select");
	$(this).siblings().addClass("notSelect");
	$(this).removeClass("notSelect");
	$(this).addClass("select");
});*/
function bottomBar_clickEvent(number,select_className,notSelect_className) {
	var showPic = ["know","industry","exper","depart"];
	$($(".footer div").get(number)).on("click",function(e) {
	$(".footer div").removeClass();
	$(this).siblings().addClass("footerItem " + notSelect_className);
	$(this).addClass("footerItem " + select_className);
	$("#show").empty();
	$("#show").append("<img src='image/" + showPic[number] + ".jpg' class='show-1'/>");
	var content = $("<ul>"+"<li class='container'>"+
				"<img src='image/"+showPic[number]+".jpg' class='content_pic' />"+
				"<p>创意设计啊啊啊啊啊啊啊啊啊啊啊</p>"+
				"<p style='color:#424242'>这是一个简短的简介</p>"+"</li>"+
				"<li class='container'>"+
				"<img src='image/"+showPic[number]+".jpg' class='content_pic' />"+
				"<p>创意设计啊啊啊啊啊啊啊啊啊啊啊</p>"+
				"<p style='color:#424242'>这是一个简短的简介</p>"+"</li>"+"</ul>");
	$("#content").empty().append(content);
});
}
bottomBar_clickEvent(0,"Active-1","NotActive-1");
bottomBar_clickEvent(1,"Active-2","NotActive-2");
bottomBar_clickEvent(2,"Active-3","NotActive-3");
bottomBar_clickEvent(3,"Active-4","NotActive-4");


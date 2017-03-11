/*菜单切换*/
function menu() {
	var content = ["remindContent","homeworkContent","noneContent","subjectContent"];
	var menu = $(".menu>div");
	for(var i = 0;i<menu.length;i++) {
		$(menu[i]).click(function() {
			$(menu).fadeOut();
			var index = $(menu).index($(this));
			for(var j = 0;j<content.length;j++) {
				$("."+content[j]).addClass("noshow");
			}
			$("."+content[index]).fadeIn();
		});
	}
}

function showMenu() {
	$("button").click(function() {
		var content = ["remindContent","homeworkContent","noneContent","subjectContent"];
		for(var j = 0;j<content.length;j++) {
			$("."+content[j]).fadeOut();
		}
		$(".menu>div").fadeIn();
	})
}

/*获取通知消息*/
function getRemind() {
	$.getJSON("remindData.json",function(data) {
		var content = "";
		$.each(data,function(item) {
			content = content + "<p>"+item.remindContent+"</p>";
		});
		$("#remindContent").html(content);
	});
}
$(document).ready(function() {
	getRemind();
	menu();
	showMenu();
})
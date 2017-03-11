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
	$(".menuBtn").click(function() {
		var content = ["remindContent","homeworkContent","noneContent","subjectContent"];
		for(var j = 0;j<content.length;j++) {
			$("."+content[j]).fadeOut();
		}
		$(".menu>div").fadeIn();
	})
}

/*获取通知消息*/
function getRemind() {
	console.log("on");
	$.getJSON("remindData.json",function(data) {
		var content = "";
		console.log("h");
		$.each(data,function(itemIndex,item) {
			console.log(item);
			content = content + "<div class='block'>"+
				"<p class='remindTitle'>"+item.about+"</p>"+
				"<p class='remindinform'>"+item.remindContent+"</p>"+
				"<span class='remindDate'>"+item.date+"</span>"+
			"</div>";
		});
		console.log(data);
		$("#remindContent").html(content);
	});
	/*var request = new XMLHttpRequest();
	request.open("GET","remindData.json");
	request.send();
	request.onreadystateChange=function() {
		if(request.readyState===4) {
			if(request.status===200) {
				console.log(request.responseText);
			}
			else {
				alert("error"+request.status);
			}
		}
	}*/
	/*$.ajax({
		type:"GET",
		url:"remindData.json",
		dataType:"json",
		success: function(data) {
			console.log(data);
		},
		error:function(jqxhr) {
			alert(jqxhr.status)
		}
	});*/
}
$(document).ready(function() {
	console.log("1");
	console.log("2");
	getRemind();
	menu();
	showMenu();
})
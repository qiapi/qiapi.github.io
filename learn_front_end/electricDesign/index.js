/*规则的内容*/
var regulationContent=["我是第一天规则我是第一条规则我是第一天规则我是第一条规则我是第一天规则",
							"我是第二天规则我是第二天规则我是第二天规则我是第二天规则我是第二天规则",
							"我是第3天规则我是第3天规则我是第3天规则我是第3天规则我是第3天规则",
							"我是第4天规则我是第4天规则我是第4天规则我是第4天规则我是第4天规则"];
/*题目*/							
/*var test = {
	question :[{
		id:"0",
		question:"the 1 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"//1-4代表A-D
	},{
		id:"1",
		question:"the 2 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"2",
		question:"the 3 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"3",
		question:"the 4 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"4",
		question:"the 5 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"5",
		question:"the 6 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"6",
		question:"the 7 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"7",
		question:"the 8 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"8",
		question:"the 9 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	},{
		id:"9",
		question:"the 10 question",
		answer_A:"...",
		answer_B:"...",
		answer_C:"...",
		answer_D:"...",
		correct_answer:"1"
	}]
}*/
/*用到的变量：yourAnswer存放玩家答案，mark存放答对题目数，timer作答开始时间，counter计时器变量，restTime存放剩余时间*/
var yourAnswer = [];
var questionIndex = 0;
var yourChoose = 99;
var mark = 0;
var timer;
var counter;
var restTime;
var test = {};
/*获取题目*/
function getData() {
	$.getJSON("data.json",function(data) {
		test = data;
		console.log(test);
	});
}
/*添加规则的内容*/
function addRegulation() {
	var ol = "<ol>";
	for(var i = 0;i<regulationContent.length;i++) {
		ol = ol + "<li>" + regulationContent[i] + "</li>";
	}
	ol = ol+"</ol>";
	$("#regulationBlock").append(ol);
}

/*添加页码*/
function addPageNumber() {
	var ul = "<ul class='pageNumber'>";
	for(var i = 1;i<11;i++) {
		ul = ul + "<li>" + i + "</li>";
	}
	ul = ul + "</ul>";
	$("#answerPage").append(ul);
	var question = "<div class='question'></div>";
	$("#answerPage").append(question);
}

/*计数器函数*/
function counterFn() {
	counter = setInterval(function() {
		restTime = 120 - parseInt((new Date().getTime()-timer)/1000);
		$(".restTime").text("剩余答题时间："+restTime);
		if(restTime<=0) {
			checkAnswer();
		}
	},1000);
}

/*进入答题页*/
function answer() {
	$("#answerBtn").click(function() {
		getData();
		$("#index").addClass("hide");
		$("#answerPage").removeClass("hide");
		$($("#answerPage .pageNumber li")[0]).addClass("active");
		timer = new Date().getTime();
		addQuestion(0);
		$(".restTime").remove();
		$("#answerPage").append("<p class='restTime'>剩余答题时间：120</p>");
		counterFn();
	});
}

/*查看规则*/
function seeRegulation() {
	$("#regulationBtn").click(function() {
		$("#index").addClass("hide");
		$("#regulationPage").removeClass("hide");
	});
}

/*从规则返回首页*/
function regulationBack() {
	$("#regulationBack").click(function() {
		$("#regulationPage").addClass("hide");
		$("#index").removeClass("hide");
	});
}

/*添加问题*/
function addQuestion(index) {
	var questionBlock ="<div class='questionBlock'>"+ test.question[index].question + "</div>";
	var answerGroup = "<ul class='answerGroup'>";
	answerGroup = answerGroup + "<li class='answerItem'><span class='answerNum nochoose'>A</span>"+test.question[index].answer_A+"</li>"+"<li class='answerItem'><span class='answerNum nochoose'>B</span>"+test.question[index].answer_B+"</li>"+"<li class='answerItem'><span class='answerNum nochoose'>C</span>"+test.question[index].answer_C+"</li>"+"<li class='answerItem'><span class='answerNum nochoose'>D</span>"+test.question[index].answer_D+"</li></ul>";
	questionBlock = questionBlock + answerGroup;
	if(index===9) {
		questionBlock = questionBlock + "<button class='next10'></button>";
	}
	else {
		questionBlock = questionBlock + "<button class='next'></button>";
	}
	$(".question").empty();
	$(".question").append(questionBlock);
	chooseAnswer();
	nextQuestion();
}

/*下一个问题*/
function nextQuestion() {
	$(".next").click(function() {
		questionIndex++;
		pageNumberActive(questionIndex);
		addQuestion(questionIndex);
		yourAnswer.push(yourChoose);
		yourChoose = 99;
		if(questionIndex===9) {
			finishAnswer();
		}
	});
}

/*当前页码样式*/
function pageNumberActive(index) {
	var number = $("#answerPage .pageNumber li");
	number.removeClass("active");
	$(number[index]).addClass("active");
}

/*点击选择答案*/
function chooseAnswer() {
	var answerItem = $(".answerItem");
	var span = $(".answerNum");
	for(var i = 0;i<answerItem.length;i++) {
		$(answerItem[i]).click(function() {
			answerItem.removeClass("chooseAnswer");
			span.removeClass("choosespan");
			$(span[answerItem.index($(this))]).addClass("choosespan");
			$(this).addClass("chooseAnswer");
			yourChoose = answerItem.index($(this));
			console.log(yourChoose);
		})
	}
}

/*完成第十题完成作答*/
function finishAnswer() {
	$(".next10").click(function() {
		yourAnswer.push(yourChoose);
		checkAnswer();
	});
}

/*校验答案*/
function checkAnswer() {
	clearInterval(counter);
	for(var i = 0; i<10;i++) {
		console.log(test.question[i].correct_answer);
		if(yourAnswer[i]===parseInt(test.question[i].correct_answer)) {
			mark ++;
		}
	}
	$("#answerPage").addClass("hide");
	$("#result").removeClass("hide");
	$("#correctNum").text(mark);
	answerAgain();
	backIndex();
}

/*更新变量状态*/
function renew() {
	timer = new Date().getTime();
	/*counterFn();*/
	yourAnswer = [];
	mark = 0;
	addQuestion(0);
	questionIndex = 0;
	pageNumberActive(questionIndex);
}

/*重新答题*/
function answerAgain() {
	$(".again").click(function() {
		getData();
		$(".restTime").text("剩余答题时间：120");
		renew();
		counterFn();
		$("#result").addClass("hide");
		$("#answerPage").removeClass("hide");
	})
}

/*返回首页*/
function backIndex() {
	$(".backIndex").click(function() {
		getData();
		renew();
		$("#result").addClass("hide");
		$("#index").removeClass("hide");
	})
}

$(document).ready(function() {
	addRegulation();
	addPageNumber();
	answer();
	seeRegulation();
	regulationBack();
	pageNumberActive();
});
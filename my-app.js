var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main');

myApp.onPageInit('about',function(page){
	myApp.alert("about 页面加载完毕");
})
myApp.router.loadPage("<h1>haha</h1>");

/*$$(document).on('pageInit',function(e){
	var page = e.detail.page;
	if(page.name === 'about') {
		myApp.alert("about页面加载完毕2");
	}
})*/
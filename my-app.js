var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main',{
	domCache:true,
	dynamicNavbar:true
});

$('.hide-navbar').on('click',function() {
	mainView.hideNavbar();
});

$('.show-navbar').on('click',function() {
	mainView.showNavbar();
});

myApp.onPageInit('about',function(page){
	myApp.alert("about 页面加载完毕");
});

var mySearchbar = myApp.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
});
/*var newContent = '<div class="page" data-page="my-page">' +
                        '<div class="page-content">' +
                          '<p>Here comes new page</p>' +
                          '<a href="index.html" class="back"> Go back to home page </a>	'+
                        '</div>' +
                      '</div>';
mainView.router.loadContent(newContent);
mainView.router.load({
	content:newContent,
	animatePages:false
});*/
/*$$(document).on('pageInit',function(e){
	var page = e.detail.page;
	if(page.name === 'about') {
		myApp.alert("about页面加载完毕2");
	}
})*/
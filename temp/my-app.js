var myApp = new Framework7({
	swipePanel:'left'
	});
var $$ = Dom7;
var mainView = myApp.addView('.view-main',{
	domCache:true,
	dynamicNavbar:true
});
var mySearchbar = myApp.searchbar('.searchbar',{
	searchList:'.list-block-search',
	searchIn:'.item-title'
});
$$('.open-right-panel').on('click',function(e) {
	myApp.openPanel('right');
});
$$('.panel-close').on('click',function(e) {
	myApp.closePanel();
});
$$('.alert-text').on('click',function() {
	myApp.alert('here goes alert text');
});
$$('.alert-text-title').on('click',function() {
	myApp.alert('here goes alert text','title');
});
$$('.alert-text-title-callback').on('click',function() {
	myApp.alert('here goes alert text','title', function() {
		myApp.alert('button clicked!')
	});
});
$$('.confirm-ok').on('click',function() {
	myApp.confirm('Are you sure?','Title',
		function() {
			myApp.alert('You clicked ok','ok');
		},
		function() {
			myApp.alert('You clicked cancel','cancel');
		}
	);
});
$$('.prompt').on('click',function() {
	myApp.prompt('What is your name?','Hello',
		function(value) {
			myApp.alert('Your name is' + value +'! You clicked ok!','Ok');
		},
		function(value) {
			myApp.alert('Your name is' + value +'! You clicked cancel!','cancel');
		});
});
$$('.login-modal').on('click',function() {
	myApp.modalLogin('Login','Big title',function(username,password) {
		if (username==''||password=='') {
			myApp.alert('please input your name and password!','Fail');
		}else{
			myApp.alert('Welcome ' + username +'! Your password is ' + password +' !','Welcome');
		}
	});
});
$$('.password-modal').on('click',function() {
	myApp.modalPassword('Your password','Big title',function(password) {
		myApp.alert('Welcome! Your password is ' + password +' !','Welcome');
	});
});
$$('.name').on('click',function() {
	myApp.prompt('What is your name?','Hello',function(value) {
		myApp.confirm('Are you sure your name is ' + value + ' ?','Question',function() {
			myApp.alert('Welcome ' + value + ' !','Welcome');
		});
	});
});
$$('.open-preloader').on('click',function() {
	myApp.showPreloader('Preloader');
	setTimeout(function() {
		myApp.hidePreloader();
	},2000);
});
$$('.open-indicator').on('click',function() {
	myApp.showIndicator();
	setTimeout(function() {
		myApp.hideIndicator();
	},2000);
});
$$('.three-button').on('click',function() {
	myApp.modal({
		title:'Three button',
		text:'here is three buttons!',
		verticalButtons:true,
		buttons:[
		{
			text:'B1',
			onClick:function() {
				myApp.alert('first','clicked');
			}
		},
		{
			text:'B2',
			onClick:function() {
				myApp.alert('second','clicked');
			}
		},
		{
			text:'B3',
			onClick:function() {
				myApp.alert('third','clicked');
			}
		}]
	})
});
$$('.slider').on('click',function() {
	var modal = myApp.modal({
		title:'Awesome photos?',
		text:'What do you think about my photos?',
		afterText:'<div class="swiper-container" style="width:auto;margin:auto">' + 
		'<div class="swiper-pagination"></div>' + '<div class="swiper-wrapper">' + 
		'<div class="swiper-slide"><img src="img/ciguaxia.JPG" height="150" style="display:block;margin:0 auto"></div>' + 
		'<div class="swiper-slide"><img src="img/mayu.JPG" height="150" style="display:block;margin:0 auto"></div>' + 
		'</div>' + '</div>',
		buttons: [
		{
			text:'Bad!'
		},
		{
			text:'Awesome!',
			bold:true,
			onClick:function() {
				myApp.alert('Thanks!','Yeah');
			}
		}
		]
	});
	myApp.swiper($$(modal).find('.swiper-container'),{pagination:'.swiper-pagination'});
});
$$('.tab-modal').on('click',function() {
	myApp.modal({
		title:'<div class="buttons-row">' + '<a href="#tab1" class="button active tab-link">Tab1</a>' + 
		'<a href="#tab2" class="button tab-link">Tab2</a>' + '</div>',
		text:'<div class="tabs">' +
		'<div class="tab active" id="tab1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nibh felis. Nunc consequat diam et tellus tempor gravida. Donec hendrerit aliquet risus, ut tempor purus dictum</div>' + 
		'<div class="tab" id="tab2">it amet. Integer sit amet lacus eget ipsum pulvinar interdum. Proin semper turpis sed placerat dapibus. Sed iaculis id </div>' + '</div>',
		buttons:[
		{
			text:'ok,got it',
			bold:true
		}]
	})
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
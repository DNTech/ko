define( ["knockout/app"], function( app ){
	
	dn = new app.app();
	dn.configRoutes( [
		{
			url : "/",
			title : "Home Page",
			view : "/views/home/homepage.html",
			controller : "app/home/homepage"
		},
		{
			url : "/home",
			title : "Home Page",
			view : "/views/home/homepage.html",
			controller : "app/home/homepage"
		},
		{
			url : "/about",
			title : "About US",
			view : "/views/home/about.html",
			controller : "app/home/about"
		},
		{
			url : "/contact",
			title : "Contact US",
			view : "/views/home/contact.html",
			controller : "app/home/contact"
		}
	] );
	
	dn.init();

} );
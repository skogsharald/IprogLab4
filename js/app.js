$(function() {
	//The global variable so we can access it from other controller and views

	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController(homeView, model);

	var leftColumnView = new LeftColumnView($("#leftColumnView"), model);
	var leftColumnViewController = new LeftColumnViewController(homeView, model);

	var courseOverView = new CourseOverView($("#courseOverView"), model);
	var courseOverViewController = new CourseOverViewController($("#courseOverView"), model);

	// var exampleView = new ExampleView($("#exampleView"),model);
 //   	var exampleViewController = new ExampleViewController(exampleView,model);
 //   	exampleView.makeHidden();



   	window.stage = "starter";
	window.startApp = function(){
		homeView.makeHidden();
		leftColumnView.makeVisible();
		$("body").removeClass("background-image");
	}
});
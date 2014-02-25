$(function() {
	//The global variable so we can access it from other controller and views

	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController(homeView, model);

	var leftColumnView = new LeftColumnView($("#leftColumnView"), model);
	var leftColumnViewController = new LeftColumnViewController(leftColumnView, model);

	var courseOverView = new CourseOverView($("#courseOverView"), model);
	var courseOverViewController = new CourseOverViewController($("#courseOverView"), model);

	var searchBarView = new SearchBarView($('#searchBarView'), model);
	var searchBarViewController = new SearchBarViewController(searchBarView, model);

	var confirmDishView = new ConfirmDishView($('#confirmDishView'), model);
	var confirmDishViewController = new ConfirmDishViewController(confirmDishView, model);

	// var exampleView = new ExampleView($("#exampleView"),model);
 //   	var exampleViewController = new ExampleViewController(exampleView,model);
 //   	exampleView.makeHidden();

   	window.stage = "starter";
	window.startApp = function(){
		homeView.makeHidden();
		leftColumnView.makeVisible();
		courseOverView.makeVisible();
		searchBarView.makeVisible();
		$("body").removeClass("background-image");
	}

	window.startConfirmDish = function(){
		courseOverView.makeHidden();
		searchBarView.makeHidden()
		confirmDishView.makeVisible();
	}

	window.startApp();
	// window.startConfirmDish();
});
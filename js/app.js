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

	var backToEditDinnerView = new BackToEditDinnerView($('#backToEditDinnerView'), model);
	var backToEditDinnerViewController = new BackToEditDinnerViewController(confirmDishView, model);

	var dinnerImagesView = new DinnerImagesView($('#dinnerImagesView'), model);
	var dinnerImagesViewController = new DinnerImagesViewController(confirmDishView, model);

	var printPrepView = new PrintPrepView($('#printPrepView'), model);

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

	window.startDinnerOverView = function(){
		searchBarView.makeHidden();
		courseOverView.makeHidden();
		confirmDishView.makeHidden();
		leftColumnView.makeHidden();
		backToEditDinnerView.makeVisible();
		dinnerImagesView.makeVisible();
	}

	window.startPrintPrep = function(){
		dinnerImagesView.makeHidden();
		printPrepView.makeVisible();
	}

	window.changeCoursesInCourseOverView = function(dishes){
		courseOverView.changeDishes(dishes);
	}

	//window.startApp();
	//window.startConfirmDish();
	//window.startDinnerOverView();
	//window.startPrintPrep();
});
$(function() {
	//The global variable so we can access it from other controller and views

	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController(homeView, model);

	var leftColumnView = new LeftColumnView($("#leftColumnView"), model);
	var leftColumnViewController = new LeftColumnViewController(leftColumnView, model);

	var courseOverViewController = new CourseOverViewController($("#courseOverView"), model);
			// TODO: is this a good way?
	window.newDishes = function(dishContainers){
		courseOverViewController.newDishes(dishContainers);
	}
	var courseOverView = new CourseOverView($("#courseOverView"), model);

	var searchBarView = new SearchBarView($('#searchBarView'), model);
	var searchBarViewController = new SearchBarViewController(searchBarView, model);

	var confirmDishView = new ConfirmDishView($('#confirmDishView'), model);
	var confirmDishViewController = new ConfirmDishViewController(confirmDishView, model);

	var backToEditDinnerView = new BackToEditDinnerView($('#backToEditDinnerView'), model);
	var backToEditDinnerViewController = new BackToEditDinnerViewController(backToEditDinnerView, model);

	var dinnerImagesView = new DinnerImagesView($('#dinnerImagesView'), model);
	var dinnerImagesViewController = new DinnerImagesViewController(dinnerImagesView, model);

	var printPrepView = new PrintPrepView($('#printPrepView'), model);

	window.startApp = function(){
		homeView.makeHidden();
		leftColumnView.makeVisible();
		courseOverView.makeVisible();
		searchBarView.makeVisible();
		$("body").removeClass("background-image");
	}

	window.startConfirmDish = function(selectedDish){
		courseOverView.makeHidden();
		searchBarView.makeHidden()
		confirmDishView.makeVisible();
		confirmDishView.setSelectedDish(selectedDish);
	}

	window.backFromConfirmDishView = function(){
		confirmDishView.makeHidden();
		searchBarView.makeVisible();
		courseOverView.makeVisible();
		leftColumnView.makeVisible();
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

	// TODO: is this a good way?
	window.imageClick = function(container){
		courseOverViewController.imageClick(container);
	}

	window.backToEditDinner = function(){
		backToEditDinnerView.makeHidden();
		dinnerImagesView.makeHidden();
		printPrepView.makeHidden();
		searchBarView.makeVisible();
		courseOverView.makeVisible();
		leftColumnView.makeVisible();
	}

	// window.startApp();
	// window.startConfirmDish();
	// window.startDinnerOverView();
	//window.startPrintPrep();	
	// window.startApp();
	// window.startConfirmDish();
	// window.startDinnerOverView();
	// window.startPrintPrep();	
});
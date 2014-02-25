var SearchBarViewController = function(view, model) {
	var str = "";
	// Subscribe to change in values in the select field
	view.selectTypes.on('change', function(){
		var thisvalue = $(this).find("option:selected").text().toLowerCase();
		console.log(model.getAllDishes(thisvalue));
		window.changeCoursesInCourseOverView(model.getAllDishes(thisvalue));
	});

	view.searchButton.click(function(event){
		// Make sure page doesn't reload
		event.preventDefault();

		// User must search on _exact_ strings

		var filters = view.searchField.val();
		var type = view.selectTypes.val().toLowerCase();

		window.changeCoursesInCourseOverView(model.getAllDishes(type, filters));


	});



}
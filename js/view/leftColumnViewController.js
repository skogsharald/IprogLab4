var LeftColumnViewController = function (view, model) {
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmDinnerButton.click(function() {
		window.startDinnerOverView();
	});

	view.removeDishesButton.click(function() {
		var menu = model.getFullMenu();
		for(key in menu) {
			model.removeDishFromMenu(menu[key].id);
		}
	});

}
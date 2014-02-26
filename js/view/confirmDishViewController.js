var ConfirmDishViewController = function (view, model) {

	view.confirmDishButton.click(function(){
		model.addDishToMenu(view.selectedDishId);
		window.backFromConfirmDishView();
	});

	view.confirmDishBackButton.click(function(){
		window.backFromConfirmDishView();
	});
}
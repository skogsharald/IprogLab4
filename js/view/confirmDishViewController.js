var ConfirmDishViewController = function (view, model) {

	view.confirmDishButton.click(function(){
		model.addDishToMenu(view.selectedDishId);
		console.log(model.getFullMenu());
	});
}
var CourseOverViewController = function (view, model) {


	function imageClick(event){
		// More navigation logic to move on to next screen
		window.startConfirmDish(event.data.id);
	}



	// Set onClickListener to all the dishes
	this.newDishes = function (dishContainers) {
		for(var i = 0; i<dishContainers.length; i++){
			container = dishContainers[i];
			id = container.attr("id");
			container.click({id:id}, imageClick);

		}
	}
}
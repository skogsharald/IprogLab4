var CourseOverViewController = function (view, model) {


	function imageClick(event){
		console.log(model.getDish(event.data.id));
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
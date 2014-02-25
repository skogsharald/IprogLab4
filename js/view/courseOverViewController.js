var CourseOverViewController = function (view, model) {

	this.imageClick = function(container){
		console.log(model.getDish(container.id));
	}
}
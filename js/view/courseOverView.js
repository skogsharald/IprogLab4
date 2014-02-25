var CourseOverView = function (container,model) {
	//No need to implement observer, the view is not affected by the model.


	this.makeHidden = function(){
		container.fadeOut(0, function() {
			//Animation complete
		});
	}

	this.makeVisible = function(){
		container.fadeIn(1000, function() {
			//Animation complete
		});
	}
}
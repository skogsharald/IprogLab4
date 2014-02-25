var LeftColumnView = function (container,model) {
	this.confirmButton = container.find("#startButton");

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
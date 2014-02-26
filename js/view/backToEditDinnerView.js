var BackToEditDinnerView = function (container,model) {

// <div class="bg-warning row grid-border">
// 	<div class="col-md-3 col-md-offset-1"><h3>My Dinner: 4 people</h3></div>
// 	<div class="col-md-7"><button class="btn btn-primary pull-right btn-middle"><span class="glyphicon glyphicon-chevron-left"></span> Go back and edit dinner</button></div>
// </div>
	
	var row = $("<div>").addClass("row bg-warning grid-border");
	var colOne = $("<div>").addClass("col-md-3 col-md-offset-1");
	var colOneTitle = $("<h3>").html("My Dinner: " + model.getNumberOfGuests() + " people");
	colOne.append(colOneTitle);
	row.append(colOne);
	var colTwo = $("<div>").addClass("col-md-7");
	var colTwoButton = $("<button>").addClass("btn btn-primary pull-right btn-middle").attr("id", "backToDinner");
	colTwoButton.html("<span class='glyphicon glyphicon-chevron-left'></span> Go back and edit dinner");
	colTwo.append(colTwoButton);
	row.append(colTwo);

	container.append(row);

	this.backToDinnerButton = container.find("#backToDinner");

	model.addObserver(this);

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

	this.update = function(arg){
		colOneTitle.html("My Dinner: " + model.getNumberOfGuests() + " people");
	}
}
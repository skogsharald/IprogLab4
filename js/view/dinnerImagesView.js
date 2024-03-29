var DinnerImagesView = function (container,model) {

	var dishes = model.getFullMenu();
	var totalCost = model.getTotalMenuPrice();

	// Add the first row which contains the two columns 
	var firstRow = $("<div>").addClass("print-prep row");

	// Populate the dinner images view
	var dinnerCol = $("<div>").addClass("col-md-6 col-md-offset-3");
	var imgRow = $("<div>").addClass("centerImgRow row");

	for(i = 0; i < dishes.length; i++) {
		var dish = dishes[i];
		var imgCol;
		var imgContainer;
		var imgTag;
		var label;

		imgCol = $("<div>").addClass("col-md-4");
		imgContainer = $("<div>").addClass("image-container");
		imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
		label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
		var dishPrice = model.getDishPrice(dish.id)*model.getNumberOfGuests();
		courseCost = $("<p>").html(dishPrice + " SEK");
		imgContainer.append(imgTag);
		imgContainer.append(label);
		imgContainer.append(courseCost);
		imgCol.append(imgContainer);
		imgRow.append(imgCol);	
	}

	dinnerCol.append(imgRow);

	// Populate the total cost column
	var costCol = $("<div>").addClass("left-border col-md-1");
	totalCost = $("<p>").html("Total: <br>" + totalCost + " SEK");
	costCol.append(totalCost);

	// Append the total cost column and the dinner images colum to the first row
	firstRow.append(dinnerCol);
	firstRow.append(costCol);

	// Add the second row which contains the get full recipe button, 
	// also populate the button column and append it to the row.
	var secondRow = $("<div>").addClass("top-border row");
	var buttonCol = $("<div>").addClass("col-md-12");
	var printButton = $("<button>").addClass("print-button btn btn-primary").attr("id", "dinnerOverViewButton").html("Print Full Recipe");
	buttonCol.append(printButton);
	secondRow.append(buttonCol);

	container.append(firstRow);
	container.append(secondRow);
	
	this.dinnerOverViewButton = container.find("#dinnerOverViewButton");
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

	this.update = function(){
		firstRow.html("");
		var dishes = model.getFullMenu();
		var totalCost = model.getTotalMenuPrice();

		// Add the first row which contains the two columns 
		// Populate the dinner images view
		var dinnerCol = $("<div>").addClass("col-md-6 col-md-offset-3");
		var imgRow = $("<div>").addClass("centerImgRow row");

		for(i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			var imgCol;
			var imgContainer;
			var imgTag;
			var label;

			imgCol = $("<div>").addClass("col-md-4");
			imgContainer = $("<div>").addClass("image-container");
			imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
			label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
			var dishPrice = model.getDishPrice(dish.id)*model.getNumberOfGuests();
			courseCost = $("<p>").html(dishPrice + " SEK");
			imgContainer.append(imgTag);
			imgContainer.append(label);
			imgContainer.append(courseCost);
			imgCol.append(imgContainer);
			imgRow.append(imgCol);	
		}

		dinnerCol.append(imgRow);

		// Populate the total cost column
		var costCol = $("<div>").addClass("left-border col-md-1");
		totalCost = $("<p>").html("Total: <br>" + totalCost + " SEK");
		costCol.append(totalCost);

		// Append the total cost column and the dinner images colum to the first row
		firstRow.append(dinnerCol);
		firstRow.append(costCol);
	}
}
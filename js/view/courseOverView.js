var CourseOverView = function (container,model) {
	this.coursesContainer = container.find("#coursesContainer");
	container.attr("style", "display:block");
	dishes = model.getAllDishes('starter');
	var j;


	var dishContainers = [];

	var row = $("<div>").addClass("row").attr("style", "display:none");
	for(var i=0;i<dishes.length;i++){
		if(j>5){
			this.coursesContainer.append(row);
			// New row to add dishes to
			row = $("<div>").addClass("row");
			col = $("<div>").addClass("col-md-2");
			row.append(col);
			this.coursesContainer.append(row);
			j=0;
		} else {
			j = j+1;
		}
		var col = $("<div>").addClass("col-md-2");
		dish = dishes[i]
		newContainer = $("<div>").addClass("image-container").attr("id", dish.id);
		imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border img-responsive img-thumbnail");
		newContainer.append(imgTag);
		label = $("<p>").addClass("center-label").addClass("grid-border grey").html(dish.name);
		newContainer.append(label);
		description = $("<p>").html(dish.description);
		newContainer.append(description);

		dishContainers.push(newContainer);
		col.append(newContainer);
		row.append(col);
	}

	// Navigation logic, must tell the courseOverViewController which dishes are being displayed at the moment
	// as this will change when user searches or changes type of dish
	window.newDishes(dishContainers);
	this.coursesContainer.append(row);

	this.changeDishes = function(dishes){
		var dishContainers = [];
		this.coursesContainer.html("");
		var j;
		row = $("<div>").addClass("row");
		for(var i=0;i<dishes.length;i++){
			if(j>5){
				this.coursesContainer.append(row);
				// New row to add dishes to
				row = $("<div>").addClass("row");
				col = $("<div>").addClass("col-md-2");
				row.append(col);
				this.coursesContainer.append(row);
				j=0;
			} else {
				j = j+1;
			}
			var col = $("<div>").addClass("col-md-2");
			dish = dishes[i]
			newContainer = $("<div>").addClass("image-container").attr("id", dish.id);
			newContainer.attr("style", "cursor:pointer");
			imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
			newContainer.append(imgTag);
			label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
			newContainer.append(label);
			description = $("<p>").html(dish.description);
			newContainer.append(description);

			dishContainers.push(newContainer);
			col.append(newContainer);
			row.append(col);
		}
		// Navigation logic, must tell the courseOverViewController which dishes are being displayed at the moment
		// as this will change when user searches or changes type of dish
		window.newDishes(dishContainers);
		this.coursesContainer.append(row);
		this.coursesContainer.fadeOut(0, function() {
			//Animation complete
		});
		this.coursesContainer.fadeIn(600, function() {
			//Animation complete
		});

	}

	this.makeHidden = function(){
		container.fadeOut(0, function() {
			//Animation complete
		});
	}

	this.makeVisible = function(){
		row.fadeIn(1000, function() {
			//Animation complete
		});
	}
}

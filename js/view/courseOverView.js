var CourseOverView = function (container,model) {
	this.coursesContainer = container.find("#coursesContainer");
	container.attr("style", "display:block");
	dishes = model.getAllDishes('starter');
	var j;

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
		container = $("<div>").addClass("image-container").attr("id", dish.id);
		container.attr("onclick", "window.imageClick(this)");
		imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
		container.append(imgTag);
		label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
		container.append(label);
		description = $("<p>").html(dish.description);
		container.append(description);
		col.append(container);
		row.append(col);
	}
	this.coursesContainer.append(row);

	this.changeDishes = function(dishes){
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
			container = $("<div>").addClass("image-container").attr("id", dish.id);
			container.attr("onclick", "window.imageClick(this)");
			imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
			container.append(imgTag);
			label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
			container.append(label);
			description = $("<p>").html(dish.description);
			container.append(description);
			col.append(container);
			row.append(col);
		}
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

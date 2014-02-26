var PrintPrepView = function (container,model) {

	var dishes = model.getFullMenu();

	for(key in dishes){
		var dish = dishes[key];
		var row = $("<div>").addClass("row");

		//Append the image
		var imgCol = $("<div>").addClass("col-md-2 col-md-offset-1");
		var img = $("<img>").addClass("img-responsive print-img").attr("src", "images/" + dish.image);
		imgCol.append(img);
		row.append(imgCol);

		//Append ingredients
		var dishCol = $("<div>").addClass("col-md-4").attr("id", "dishCol");
		var dishName = $("<h3>").html(dish.name);
		dishCol.append(dishName);

		var ingredients = dish.ingredients;
		var guests = model.getNumberOfGuests();
		for(key2 in ingredients){
			var ingredient = ingredients[key2];
			var dishIngredient = $("<p>").html((ingredient.quantity*guests) + " " + ingredient.unit + " " + ingredient.name);
			dishCol.append(dishIngredient);
		}
		
		row.append(dishCol);

		//Append the preperations instructions
		var prepInfo = $("<div>").addClass("col-md-4");
		var prepHead = $("<h4>").addClass("print-prep").html("Preperations");
		var prepInstructions = $("<p>").html(dish.description);
		prepInfo.append(prepHead);
		prepInfo.append(prepInstructions);
		row.append(prepInfo);

		container.append(row);		
	}

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
		container.html("");
		var dishes = model.getFullMenu();

		for(key in dishes){
			var dish = dishes[key];
			var row = $("<div>").addClass("row");

			//Append the image
			var imgCol = $("<div>").addClass("col-md-2 col-md-offset-1");
			var img = $("<img>").addClass("img-responsive print-img").attr("src", "images/" + dish.image);
			imgCol.append(img);
			row.append(imgCol);

			//Append ingredients
			var dishCol = $("<div>").addClass("col-md-4").attr("id", "dishCol");
			var dishName = $("<h3>").html(dish.name);
			dishCol.append(dishName);

			var ingredients = dish.ingredients;
			var guests = model.getNumberOfGuests();
			for(key2 in ingredients){
				var ingredient = ingredients[key2];
				var dishIngredient = $("<p>").html((ingredient.quantity*guests) + " " + ingredient.unit + " " + ingredient.name);
				dishCol.append(dishIngredient);
			}
			
			row.append(dishCol);

			//Append the preperations instructions
			var prepInfo = $("<div>").addClass("col-md-4");
			var prepHead = $("<h4>").addClass("print-prep").html("Preperations");
			var prepInstructions = $("<p>").html(dish.description);
			prepInfo.append(prepHead);
			prepInfo.append(prepInstructions);
			row.append(prepInfo);

			container.append(row);		
		}

	}
}
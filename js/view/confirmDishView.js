var ConfirmDishView = function (container,model) {
	this.confirmDishName = container.find("#confirmDishName");
	this.confirmDishImage = container.find("#confirmDishImage")
	this.confirmDishText = container.find("#confirmDishText");
	this.confirmDishBackButton = container.find("#confirmDishBackButton");
	this.confirmDishButton = container.find("#confirmDishButton");
	this.ingredientsTable = container.find("#ingredientsTable");
	this.tableTitle = container.find("#tableTitle");
	this.preparationParagraph = container.find("#preparationParagraph");
	this.dishCost = container.find("#dishCost");

	model.addObserver(this);
	this.setSelectedDish = function (selectedDishId) {
		this.selectedDishId = parseInt(selectedDishId);
		this.generateDishHTML();
	}

	this.generateDishHTML = function () {
		this.dish = model.getDish(this.selectedDishId);


		// The left part with the dish image
		this.confirmDishName.html(this.dish.name);
		this.confirmDishImage.attr("src", "images/"+this.dish.image);
		this.confirmDishText.html("Lorem ipsum"); // Having preparations twice sounds redundant. This is a small text about the dish


		// Leave room for the ingredients tab
		this.generateIngredientsHTML();

		this.preparationParagraph.html(dish.description);

	}

	this.generateIngredientsHTML = function () {
		this.ingredientsTable.html("");
		ingredients = this.dish.ingredients;
		guests = model.getNumberOfGuests();

		this.tableTitle.html(guests);
		for(var i = 0; i<ingredients.length;i++){
			ingredient = ingredients[i];
			tableRow = $("<tr>")
			quantity = $("<td>").html(ingredient.quantity * guests + " " +ingredient.unit);
			nameTD = $("<td>").html(ingredient.name);
			currency = $("<td>").html("SEK");
			price = $("<td>").html(ingredient.price * guests);
			tableRow.append(quantity, nameTD, currency, price);
			this.ingredientsTable.append(tableRow);
		}

		this.dishCost.html(model.getDishPrice(this.dish.id) * guests);

	}

	this.update = function(arg){
		this.generateIngredientsHTML();
	}

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
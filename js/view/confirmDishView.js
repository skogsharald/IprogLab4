var ConfirmDishView = function (container,model) {
	this.dishToBeConfirmedContainer = container.find("#dishToBeConfirmedContainer");
	this.ingredientsTable = container.find("#ingredientsTable");
	this.tableTitle = container.find("#tableTitle");
	this.preparationParagraph = container.find("#preparationParagraph");
	this.dishCost = container.find("#dishCost");

	this.setSelectedDish = function (selectedDishId) {
		this.selectedDishId = parseInt(selectedDishId);
		this.generateDishHTML();
	}

	this.generateDishHTML = function () {
		this.dish = model.getDish(this.selectedDishId);
		this.dishToBeConfirmedContainer.html("");


		// The left part with the dish image
		header = $("<h2>").html(this.dish.name);
		image = $("<img>").attr("src", "images/"+this.dish.image);
		desc = $("<p>").html("Lorem ipsum"); // Having preparations twice sounds redundant. This is a small text about the dish
		backButton = $("<button>").addClass("btn btn-primary");
		span = $("<span>").addClass("glyphicon glyphicon-chevron-left");
		backButton.append(span);
		backButton.html("Back to select dish");
		this.dishToBeConfirmedContainer.append(header);
		this.dishToBeConfirmedContainer.append(image);
		this.dishToBeConfirmedContainer.append(desc);
		this.dishToBeConfirmedContainer.append(backButton);


		// New column for table
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
			console.log(nameTD);
			currency = $("<td>").html("SEK");
			price = $("<td>").html(ingredient.price);
			tableRow.append(quantity, nameTD, currency, price);
			this.ingredientsTable.append(tableRow);
		}

		this.dishCost.html(model.getDishPrice(this.dish.id));

	}

					/*<div class="row">
						<div class="col-md-5">
							<h2>Lasagna</h2>
							<img src="images/meatballs.jpg"/>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<button class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span> Back to select dish</button>
							</div>
							<div class="col-md-7 grid-border bg-warning">
								<h2>Ingredients for 4 people:</h2>
								<table class="table">
									<tr>
										<td>12 tbsp</td>
										<td>Ägg, eller nåt</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>Något annat</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>Mer grejer</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>En till sak</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>hej</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>hej</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>hej</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
									<tr>
										<td>12</td>
										<td>hej</td>
										<td>SEK</td>
										<td>0.20</td>
									</tr>
								</table>
								<hr>
								<h4>SEK 77.20</h4>
								<button class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span> Confirm dish</button>
								<br>
								<br>
							</div>
						</div>
						<div class="row">
							<div class="col-md-7">
								<h1>Preparation</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>*/

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
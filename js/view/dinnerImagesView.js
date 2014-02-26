var DinnerImagesView = function (container,model) {

	var dishes = model.getFullMenu();
	var rowLimit = 0;
	var imgRow;

	// <div class="print-prep row">
	// 	<div class="col-md-6 col-md-offset-3">
	// 		<div class="row">
				// <div class="col-md-4">
					// <div class="image-container">
			/*			<img class="grid-border img-responsive img-thumbnail" src="images/toast.jpg"/>
						<p class="center-label grid-border grey">Meatballs</p>
						<p>TOTAL COST</p>
					</div>
				</div>
			</div> <!-- row end -->*/

	var row = $("<div>").addClass("print-prep row");
	var dinnerCol = $("<div>").addClass("col-md-6 col-md-offset-3");

	for(i = 0; i < dishes.length; i++) {
		console.log("For-loop");
		var dish = dishes[i];
		var imgCol;
		var imgContainer;
		var imgTag;
		var label;

		if(rowLimit==0) {
			console.log("rowLimit = 0");
			imgRow = $("<div>").addClass("row");
		}

		if(rowLimit<3) {
			console.log("rowLimit < 3");
			imgCol = $("<div>").addClass("col-md-4");
			imgContainer = $("<div>").addClass("image-container");
			imgTag = $("<img>").attr("src", "images/"+dish.image).addClass("grid-border").addClass("img-responsive").addClass("img-thumbnail");
			label = $("<p>").addClass("center-label").addClass("grid-border").addClass("grey").html(dish.name);
			//Pris/dish, wait for Dexters function.
			totalCost = $("<p>").html("Pris");
			imgContainer.append(imgTag);
			imgContainer.append(label);
			imgContainer.append(totalCost);
			imgCol.append(imgContainer);
			imgRow.append(imgCol);
			rowLimit++;
		} else {
			dinnerCol.append(imgRow);
			rowlimit = 0;
		}
	}

	// Append imgRow even if the whole row is not full (contains three courses)
	if(rowLimit<3) {
		dinnerCol.append(imgRow);
	}

	row.append(dinnerCol);
	container.append(row);

/*
	<div class="top-border row">
		<div class="col-md-12">
			<button type="submit" id="dinner_overview_button" class="print-button btn btn-primary">Print Full Recipe</button>
		</div>
	</div>
</div> */

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
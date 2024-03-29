var LeftColumnView = function (container,model) {
	// this.removeIcons = [];

	this.updateMenuTable = function(){
		// this.removeIcons = [];
		var menu = model.getFullMenu();
		this.menuTable.find("#headerRow").nextAll().remove();
		for (var i = 0; i < menu.length; i++) {
			var tr = $("<tr>");
			var tdName = $("<td>");
			tdName.html(menu[i].name);
			var tdPrice = $("<td>");
			var price = model.getDishPrice(menu[i].id);
			tdPrice.html(price*model.getNumberOfGuests() +" SEK");
			tr.append(tdName);
			tr.append(tdPrice);
			this.menuTable.append(tr);
		};
	}

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalPrice = container.find("#totalPrice");
	this.confirmDinnerButton = container.find("#confirmDinnerButton");
	this.removeDishesButton = container.find("#removeDishesButton");
	this.menuTable = container.find("#menuTable");

	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");
	
	this.updateMenuTable();

	model.addObserver(this);

	if (model.getFullMenu().length == 0) {
			this.removeDishesButton.addClass('disabled');
			this.confirmDinnerButton.addClass('disabled');

		}else{
			this.removeDishesButton.removeClass('disabled');
			this.confirmDinnerButton.removeClass('disabled');

	}

	//This function gets called when there is a change at the model
	this.update = function(arg){
		if (model.getFullMenu().length == 0) {
			this.removeDishesButton.addClass('disabled');
			this.confirmDinnerButton.addClass('disabled');

		}else{
			this.removeDishesButton.removeClass('disabled');
			this.confirmDinnerButton.removeClass('disabled');

		}
		this.updateMenuTable();
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice() + " SEK");
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
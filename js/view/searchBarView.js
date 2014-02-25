var SearchBarView = function(container, model){
	this.searchField = container.find("#searchField");
	this.searchButton = container.find("#searchButton");
	this.selectTypes = container.find("#selectTypes");
	this.select = container.find("#selectTypes")[0];



	this.makeHidden = function(){
		container.fadeOut(0, function() {
			//Animation complete
		});
	}

	this.makeVisible = function(){
		container.fadeIn(1000, function() {
			//Animation complete
		});
		//Populate select field
		types = model.getTypes();
		for(var i = 0; i<types.length; i++){
			var opt = $("<option>");
			opt.attr("value", types[i]);
			opt.html(types[i]);
			this.selectTypes.append(opt);
		}
	}
}
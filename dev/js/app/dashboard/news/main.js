define(function (require) {

	var userData = localStorage.getItem("userData");
	var model = JSON.parse(userData);

	this.opt = {
		scope: $("#main"),
		templates: Handlebars.templates,
		model: model
	}

	this.$el = this.opt.scope;
	this.model = this.opt.model;

	var renderTemplate = function() {
		this.$el.html(this.opt.templates["news"](this.model));
	}

	renderTemplate();

});
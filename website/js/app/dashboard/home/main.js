define(function (require) {

	return {
		init: function(model) {

			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;

			console.log(this.model);

			this.renderTemplate();

		},

		renderTemplate: function() {
			this.$el.html(this.opt.templates["home"](this.model));
		}
	};
});
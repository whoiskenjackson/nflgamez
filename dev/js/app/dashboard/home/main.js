define(['../setup/main'], function (setup) {

	return {
		init: function(model) {

			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;
			
			if(this.model) {
			    this.renderTemplate();
			} else {
			    setup.init();
			}

		},

		renderTemplate: function() {
			this.$el.html(this.opt.templates["home"](this.model));
		}
	};
	
});
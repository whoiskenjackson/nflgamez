define(['../setup/main'], function (setup) {

	return {
		init: function(model) {

            // Setup some options
			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;
			
			// If a model exists
			if(this.model) {
			    this.renderTemplate(); // Render the Home Template
			} else {
			    setup.init(); // Go through the setup process
			}

		},

		renderTemplate: function() {
		    
			this.$el.html(this.opt.templates["home"](this.model));
			
		}
	};
	
});
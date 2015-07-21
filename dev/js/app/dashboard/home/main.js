define(['../setup/main', '../setup/teams'], function (setup, teams) {

	return {
		init: function(model, teamData) {

            // Setup some options
			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model,
				teamData: teamData
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;
			this.teamData = this.opt.teamData;
			
			// If a model exists
			if(this.model) {
			    this.renderTemplate(); // Render the Home Template
			} else {
			    setup.init(); // Go through the setup process
			}
			
			if(!this.teamData) {
			    console.log("Get Team Data");
			    teams.init();
			}
			
			

		},

		renderTemplate: function() {
		    
			this.$el.html(this.opt.templates["home"](this.model));
			
		}
	};
	
});
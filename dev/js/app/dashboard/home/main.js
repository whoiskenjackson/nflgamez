define(['../setup/main', '../setup/teams'], function (setup, teams) {

	return {
		init: function(model, teamData) {

            // Setup options
			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model,
				teamData: teamData
			}

			// Shorten references
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
			    
			    teams.init(); // Get team data and store it in local storage
			    
			}
			
			

		},

		renderTemplate: function() {
		    
			this.$el.html(this.opt.templates["home"](this.model)); // Render the template
			
		}
	};
	
});
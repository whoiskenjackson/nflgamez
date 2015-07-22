define(function (require) {
	
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
	        
	        // Render the template
	        this.renderTemplate();
        	
	    },
	    
	    renderTemplate: function() {
	        
	        this.$el.html(this.opt.templates["rankings"](this.model));
	        
	    }
	    
	}

});
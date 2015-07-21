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
        	
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;
	        
	        this.renderTemplate();
        	
	    },
	    
	    renderTemplate: function() {
	        
	        this.$el.html(this.opt.templates["news"](this.model));
	        
	    }
	    
	}

});
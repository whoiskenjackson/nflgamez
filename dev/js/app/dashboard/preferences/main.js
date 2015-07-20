define(function (require) {
	
	return {
	    
	    init: function(model) {
	        
	        model = JSON.parse(model);
	        
	        this.opt = {
        		scope: $("#main"),
        		templates: Handlebars.templates,
        		model: model
        	}
        	
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;
	        
	        this.renderTemplate();
        	
	    },
	    
	    renderTemplate: function() {
	        
	        this.$el.html(this.opt.templates["preferences"](this.model));
	        
	    }
	    
	}

});
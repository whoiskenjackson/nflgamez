define(function (require) {
	
	return {
	    
	    init: function(model, teamData) {
	        
	        // Setup options
	        this.opt = {
        		scope: $("#main"),
        		templates: Handlebars.templates,
        		model: model,
        		teamData: teamData,
        		api: {
        		    editordraft: "http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json"
        		}
        	}
        	
        	// Shorten references
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;
	        
	        // Render the template
	        this.renderTemplate();
	        this.getRankings(this.opt.api.editordraft);
        	
	    },
	    
	    renderTemplate: function() {
	        
	        this.$el.html(this.opt.templates["rankings"](this.model));
	        
	    },
	    
	    getRankings: function(url) {
	        
	        var self = this;
	        
	        $.ajax({
    			dataType: "json",
    			type: 'GET',
    			url: url,
    			success: function(data){
    				/* If user.json exists, store it via local storage
    				 * and init the Dashboard
    				 */
    				self.renderPlayersList(data);
    			},
    			error: function(error){
    				// If teams.json doesn't exist, console the errors
    				console.log("Sorry, no teams.json is available. See error below:");
    				console.log(error);
    			}
    		});
	        
	    },
	    
	    renderPlayersList: function(model) {
	        
	        this.$el.find(".players-list").html(this.opt.templates["players-list"](model));
	        
	    }
	    
	}

});
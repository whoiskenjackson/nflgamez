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

	        // Do some magic
	        this.renderTemplate();
	        this.bindEvents();

	    },

	    renderTemplate: function() {

	        this.$el.html(this.opt.templates["player"](this.model));

	    },

	    bindEvents: function() {

	        var self = this; // Keep track of scope

	        this.$el.find("[data-draftrank]").on("click", function(e) {

	            e.preventDefault();

	        });

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
    				console.log(data);
    				self.renderPlayersList(data);
    			},
    			error: function(error){
    				// If teams.json doesn't exist, console the errors
    				console.log("Sorry, no teams.json is available. See error below:");
    				console.log(error);
    			}
    		});

	    }

	}

});
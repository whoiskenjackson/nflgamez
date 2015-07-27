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
        			current: {
        				api: null,
        				offset: 0,
        				rank: 0
        			},
        		    editordraft: "http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json",
        		    editorweekly: "http://api.fantasy.nfl.com/v1/players/editorweekranks?format=json&week=99"
        		}
        	}

        	// Shorten references
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;
	        this.api = this.opt.api;

	        // Do some magic
	        this.registerPartials();
	        this.renderTemplate();
	        this.bindEvents();

	        this.api.current.api = this.api.editordraft;
	        this.getRankings(this.api.editordraft);

	    },

	    registerPartials: function() {

	    	var self = this; // Keep track of scope
	    	var rank;
	    	
	    	Handlebars.registerHelper("rank", function(){
	    	    
	    	    rank = parseInt(self.api.current.rank) + 1;
	    	    self.api.current.rank = rank;
                
                return rank;
                
            });

	        // Register Partial
	        Handlebars.registerHelper("following", function(playerID){

	        	// If player is being followed
		        if(_.indexOf(self.model.players, playerID) > -1) {
		        	
		        	return "following"; // Return following class
		            
		        }

		    });

	    },

	    renderTemplate: function() {

	        this.$el.html(this.opt.templates["rankings"](this.model));

	    },
	    
	    renderPlayersList: function(model) {

	        var self = this;

	        this.$el.find(".players-list").append(this.opt.templates["players-list"](model));

	        this.$el.find(".follow-link").on("click", function(e) {

	            e.preventDefault();

	            var element = $(this);
	            var playerID = $(this).attr("data-id");
	            self.followPlayer(element, playerID);

	        });

	    },

	    bindEvents: function() {

	        var self = this; // Keep track of scope
	        var api = self.api; // Shorten reference to api's
	        var offset = self.api.current.offset;
	        var url;
	        var position;

	        this.$el.find("[data-draftrank]").on("click", function(e) {

	            e.preventDefault();

	            url = api.editordraft;
	            api.current.api = url;
	            api.current.offset = 0;
	            api.current.rank = 0;

	            self.$el.find(".players-list").empty();
	            self.getRankings(url);

	        });

	        this.$el.find("[data-weekrank]").on("click", function(e) {

	            e.preventDefault();

	            position = $(this).attr("data-weekrank");
	            url = api.editorweekly+"&position="+position;
	            api.current.api = url;
	            api.current.offset = 0;
	            api.current.rank = 0;

	            self.$el.find(".players-list").empty();
	            self.getRankings(url);

	        });

	        this.$el.find(".load-more").on("click", function(e) {

	            e.preventDefault();

	            offset = api.current.offset + 50;
	            api.current.offset = offset;
	            url = api.current.api+"&offset="+offset;
	            api.current.rank = offset;

	            self.getRankings(url);

	        });

	    },

	    getRankings: function(url) {

	        var self = this;
	        console.log(this.api);

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

	    },

	    followPlayer: function(elm, playerID) {

	    	// If the player is not currently being followed
	        if(_.indexOf(this.model.players, playerID) < 0) {

	            this.model.players.push(playerID); // Add player ID to the players array
	            elm.addClass('following'); // Add class of following to player

	        } else {

	            _.pull(this.model.players, playerID); // Remove player ID from the players array
	            elm.removeClass('following'); // Remove class of following from the player

	        }

	        // Store the new model in local storage
	        var data = JSON.stringify(this.model);
	        localStorage.setItem("userData", data);

	    },

	}

});
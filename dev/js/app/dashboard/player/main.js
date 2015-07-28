define(function (require) {

	return {

	    init: function(model, teamData) {

	        // Setup options
	        this.opt = {
        		scope: $("#main"),
        		templates: Handlebars.templates,
        		model: model,
        		teamData: teamData,
        		playerInfo: {
        		    playerId: null,
        		    name: null,
        		    position: null,
        		    teamAbbr: null,
        		    season: 2014,
        		    statType: "seasonStats",
        		    week: 1
        		},
        		api: {
        			offset: 0,
        		    playerDetails: "http://api.fantasy.nfl.com/v1/players/details?",
        		    playerStats: "http://api.fantasy.nfl.com/v1/players/stats?format=json",
        		    playerAdvanced: "http://api.fantasy.nfl.com/v1/players/advanced?"
        		}
        	}

        	/* API Information:
        	 *
        	 * Player Details: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersDetails
        	 * Player Stats: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersStats
        	 * Player Advanced Stats: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersAdvanced
        	 */

        	// Shorten references
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;
	        this.api = this.opt.api;
	        this.playerInfo = this.opt.playerInfo;

	        // Do some magic
	        this.renderTemplate();
	        this.registerPartials();
	        this.getParams();
	        this.bindEvents();

	    },
	    
	    registerPartials: function() {
	        
	        var self = this; // Keep track of scope
	        
	        /* Following Partial:
	    	 *
	    	 * Creating the ability for handlebars to know if the user is following
	    	 * a player.
	    	 */
	        Handlebars.registerHelper("following", function(playerID){

	        	// If player is being followed
		        if(_.indexOf(self.model.players, playerID) > -1) {
		        	
		        	return "following"; // Return following class
		            
		        }

		    });
		    
	    },

	    renderTemplate: function() {

	        this.$el.html(this.opt.templates["player"](this.model));

	    },

	    renderPlayerInfo: function() {

	    	console.log(this.playerInfo);
	    	
	    	var self = this; // Keep track of scope
	    	
	    	// Render Template
	    	this.$el.find(".player-info").html(this.opt.templates["player-info"](this.playerInfo));
	    	
	    	// When a user clicks on the following link
	    	this.$el.find(".follow-link").on("click", function(e) {

	            e.preventDefault();

	            var element = $(this);
	            var playerID = $(this).attr("data-id");
	            self.followPlayer(element, playerID);

	        });

	    },

	    bindEvents: function() {

	        var self = this; // Keep track of scope

	        this.$el.find("[data-draftrank]").on("click", function(e) {

	            e.preventDefault();

	        });

	    },

	    getParams: function() {

	        var playerParams = window.location.search.substring(1); // Find params available after '?' in the url.
	        playerParams = playerParams.split("&"); // Place all params in an array.
	        var playerParamsLength = playerParams.length; // Find the length fo the array.
	        var i = 0;
	        var params;
	        var paramKey;
	        var paramValue;

	        for(i; i < playerParamsLength; i++) {

	            // Split the param to find the key and value
	            params = playerParams[i].split("=");
	            paramKey = params[0];
	            paramValue = params[1];

	            _.set(this.playerInfo, paramKey, paramValue);

	        }

	        this.getPlayerDetails();

	    },

	    getPlayerDetails: function() {

	    	/* Player Details:
			 *
	    	 * API Info: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersDetails
	    	 *
	    	 * Params:
	    	 *
	    	 * playerId - Required - The player id you want details for
	    	 */

	    	 var self = this; // Keep track of scope
	    	 var url = this.api.playerDetails + "playerId=" + this.playerInfo.playerId; // Assemble URL
	    	 var callbackFunction = this.assemblePlayerDetails;

	    	 this.getStats(url, callbackFunction);

	    },

	    getStats: function(url, callbackFunction) {

	    	var self = this; // Keep track of scope

	        $.ajax({
    			dataType: "json",
    			type: 'GET',
    			url: url,
    			success: function(data){
    				/* If user.json exists, store it via local storage
    				 * and init the Dashboard
    				 */
    				console.log(data);
    				callbackFunction(self, data);
    			},
    			error: function(error){
    				// If teams.json doesn't exist, console the errors
    				console.log("Sorry, no teams.json is available. See error below:");
    				console.log(error);
    			}
    		});

	    },

	    assemblePlayerDetails: function(self, playerData) {

	    	playerData = playerData.players[0];

	    	_.forEach(playerData, function(value, key) {

	    		_.set(self.playerInfo, key, value);

	    	});
	    	
	    	var weeks = self.playerInfo.weeks;
	    	var weeksLength = weeks.length;
	    	var i = 0;
	    	var count = 1;
	    	
	    	for(i; i < weeksLength; i++) {
	    	    
	    	    if(count == 1) {
	    	        weeks[i].open = true;
	    	    } else {
	    	        weeks[i].open = false;
	    	    }
	    	    
	    	    if(count == 3) {
	    	        count = 0;
	    	        weeks[i].close = true;
	    	    } else {
	    	        weeks[i].close = false;
	    	    }
	    	    
	    	    count++;
	    	    
	    	}

	    	self.renderPlayerInfo();
	    	
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

	    }

	}

});
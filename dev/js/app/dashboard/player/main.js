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
        		    position: null,
        		    teamAbbr: null,
        		    season: 2014,
        		    statType: "season"
        		},
        		api: {
        		    playerDetails: "http://api.fantasy.nfl.com/v1/players/details?playerId=",
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
	        this.playerInfo = this.opt.playerInfo;

	        // Do some magic
	        this.getPlayerInfo();
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
	    
	    getPlayerInfo: function() {
	        
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
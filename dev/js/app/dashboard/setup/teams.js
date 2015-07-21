define(function (require) {

	return {
		init: function() {
		    
		    var teamDataURL = "js/settings/teams.json"; // User JSON Filepath
            
            // Setup Options
			this.opt = {
				scope: $("#main"),
				teamData: null
			}

			this.$el = this.opt.scope;
			this.teamData = this.opt.teamData;
			
			this.getData(teamDataURL); // Check to see if user.json exists
			
		},
		
		getData: function(url) {
		    //
		    var self = this; // Keep track of scope
		    
		    $.ajax({
    			dataType: "json",
    			type: 'GET',
    			url: url,
    			success: function(model){
    				/* If user.json exists, store it via local storage
    				 * and init the Dashboard
    				 */
    				var data = JSON.stringify(model);
    				localStorage.setItem("teamData", data);

    			},
    			error: function(error){
    				/* If user.json doesn't exist, create the userData model
    				 * and run the setup screen.
    				 */
    				console.log("Sorry, no teams.json is available. See error below:");
    				console.log(error);
    			}
    		});
    		
		}
	};
});
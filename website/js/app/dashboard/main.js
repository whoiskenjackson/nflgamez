define(function(require) {

	var setup = require('setup/main');
	var home = require('home/main');
    var userInfoURL = "js/settings/user.json";
    var userData = localStorage.getItem("userData");

    // Init the Dashboard
	var initDashboard = function(data) {
		var model = JSON.parse(data);
		home.init(model);
	}

	// Create blank userData model and store in local storage.
	var initSetup = function() {
		var model = {
			"name": null,
			"team": null,
			"news": [],
			"players": []
		}
		var data = JSON.stringify(model);

		localStorage.setItem("userData", data);
		setup.init(model);
	}

	// Make an ajax request for the data
	var getData = function (url) {
		$.ajax({
			dataType: "json",
			type: 'GET',
			url: url,
			success: function(model){
				/* If user.json exists, store it via local storage
				 * and init the Dashboard
				 */
				var data = JSON.stringify(model);

				localStorage.setItem("userData", data);
				initDashboard(model);
			},
			error: function(){
				/* If user.json doesn't exist, create the userData model
				 * and run the setup screen.
				 */
				initSetup();
			}
		});
	}

	// If userData exists as a localStorage item
	if(userData) {
		initDashboard(userData);
	} else {
		getData(userInfoURL);
	}

});
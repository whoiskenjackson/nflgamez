define(function(require) {

	var setup = require('setup/setup');
    var userInfoURL = "js/settings/user.json";
    var userData = localStorage.getItem("userData");

	var initDashboard = function(data) {
		setup.init(data);
	}

	var getData = function (url) {
		$.ajax({
			dataType: "json",
			type: 'GET',
			url: url,
			success: function(model){
				var data = JSON.stringify(model);

				localStorage.setItem("userData", data);
				initDashboard(model);
			},
			error: function(){
				initSetup();
			}
		});
	}

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

	if(userData) {
		initDashboard(userData);
	} else {
		getData(userInfoURL);
	}

});
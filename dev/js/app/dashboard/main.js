define(function(require) {

    // Config of all of the available pages.
    var config = {
        "page": {
            "home": "home/main",
            "news": "news/main",
            "rankings": "rankings/main",
            "preferences": "preferences/main"
        }
    }

    // Get User Data and Team Data from Local Stoarage
    var userData = localStorage.getItem("userData");
    var teamData = localStorage.getItem("teamData");
    
    if(userData) {
        userData = JSON.parse(userData);
    }
    
    if(teamData) {
        teamData = JSON.parse(teamData);
    }
    
    // Find the data-page attribute to figure
    // out what page the user is on.
    var $page = $("body").attr('data-page');
    
    var modulePath = _.get(config.page, $page); // Get the Module Path
    
    // Require the Module
    require([modulePath], function(module) {

        module.init(userData, teamData); // Initialize the Module

    });

});
define(function(require) {

    // Config of all of the available pages.
    var config = {
        "page": {
            "home": "home/main",
            "news": "news/main"
        }
    }

    // Get User Data from Local Stoarage
    var userData = localStorage.getItem("userData");
    
    // Find the data-page attribute to figure
    // out what page the user is on.
    var $page = $("body").attr('data-page');
    
    var modulePath = _.get(config.page, $page); // Get the Module Path
    
    // Require the Module
    require([modulePath], function(module) {
        // Initialize the Module
        module.init(userData);
    });

});
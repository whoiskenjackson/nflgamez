define(function (require) {

	return {

	    init: function(model) {
            
            //Setup options
	        this.opt = {
        		scope: $("#main"),
        		templates: Handlebars.templates,
        		model: model
        	}

        	// Shortening references
        	this.$el = this.opt.scope;
	        this.model = this.opt.model;

	        this.renderTemplate(); // Render the template

	    },

	    renderTemplate: function() {

	        this.$el.html(this.opt.templates["preferences"](this.model));
	        this.displayUserExportData(); // Display User Data
	        this.bindEvents(); // Bind Click Events

	    },
	    
	    displayUserExportData: function() {
	        var data = JSON.stringify(this.model);
	        this.$el.find("[name='export']").val(data); //Display User Data in textarea
	    },

	    bindEvents: function() {

	        var self = this; // Keep track of scope

	        this.$el.find(".btn-save").on("click", function(e) {
	            e.preventDefault();
	            self.savePreferences();
	        });

	    },

	    savePreferences: function() {

	        this.saveUserInfo();
	        this.saveNewsNetworks();
	        this.savePlayers();

	        var data = JSON.stringify(this.model); // Convert model to string
	        localStorage.setItem("userData", data); // Store data
	        
	        this.renderTemplate();

	    },
	    
	    saveUserInfo: function() {
	        
	        var self = this; // Keep track of scope
	        var userInfoValue;
	        var setting;
	        
	        this.$el.find("[type='text']").each(function() {
	            
	            userInfoValue = $(this).val(); // Get the value of the input
	            setting = $(this).attr('name'); // Find what needs to be set in the model
	            
	            _.set(self.model, setting, userInfoValue);
	            
	        });
	        
	    },

	    saveNewsNetworks: function() {

	    	var self = this; // Keep track of scope
	    	var network;

	    	this.$el.find("[name='news']").each(function() {

	           network = $(this).val(); // Get the value of the checkbox

	           // If the checkbox is checked
	           if($(this).is(":checked")) {

	               _.set(self.model.news, network, true); // Set item to true

	           } else {

	               _.set(self.model.news, network, false); // Set item to false

	           }

	        });

	    },

	    savePlayers: function() {

	    	// TODO: Once player's data is figured out,
	    	// save player info.

	    }

	}

});
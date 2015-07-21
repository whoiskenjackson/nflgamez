define(function (require) {

	return {

	    init: function(model) {

	        this.opt = {
        		scope: $("#main"),
        		templates: Handlebars.templates,
        		model: model
        	}

        	this.$el = this.opt.scope;
	        this.model = this.opt.model;

	        this.renderTemplate();

	    },

	    renderTemplate: function() {

	        this.$el.html(this.opt.templates["preferences"](this.model));
	        this.displayUserExportData();
	        this.bindEvents();

	    },
	    
	    displayUserExportData: function() {
	        var data = JSON.stringify(this.model);
	        this.$el.find("[name='export']").val(data);
	    },

	    bindEvents: function() {

	        var self = this;

	        this.$el.find(".btn-save").on("click", function(e) {
	            e.preventDefault();
	            self.savePreferences();
	        });

	    },

	    savePreferences: function() {

	        this.saveUserInfo();
	        this.saveNewsNetworks();
	        this.savePlayers();

	        var data = JSON.stringify(this.model);
	        localStorage.setItem("userData", data);
	        
	        this.renderTemplate();

	    },
	    
	    saveUserInfo: function() {
	        
	        var self = this;
	        var userInfoValue;
	        var setting;
	        
	        this.$el.find("[type='text']").each(function() {
	            
	            userInfoValue = $(this).val();
	            setting = $(this).attr('name');
	            
	            _.set(self.model, setting, userInfoValue);
	            
	        });
	        
	    },

	    saveNewsNetworks: function() {

	    	var self = this;
	    	var network;

	    	this.$el.find("[name='news']").each(function() {

	           network = $(this).val();

	           if($(this).is(":checked")) {

	               _.set(self.model.news, network, true);

	           } else {

	               _.set(self.model.news, network, false);

	           }

	        });

	    },

	    savePlayers: function() {

	    	// TODO: Once player's data is figured out,
	    	// save player info.

	    }

	}

});
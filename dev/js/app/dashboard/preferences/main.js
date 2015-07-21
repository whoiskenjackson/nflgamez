define(function (require) {

	return {

	    init: function(model) {

	        model = JSON.parse(model);

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
	        this.bindEvents();

	    },

	    bindEvents: function() {

	        var self = this;

	        this.$el.find(".btn-save").on("click", function(e) {
	            e.preventDefault();
	            self.savePreferences();
	        });

	    },

	    savePreferences: function() {

	        this.saveNewsNetworks();
	        this.savePlayers();

	        var data = JSON.stringify(this.model);
	        localStorage.setItem("userData", data);

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

	    	var self = this;

	    }

	}

});
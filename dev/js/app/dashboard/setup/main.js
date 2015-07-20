define(function (require) {

	return {
		init: function(model) {
		    
		    var userInfoURL = "js/settings/user.json"; // User JSON Filepath
            
            // Setup Options
			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: null
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;
			
			this.getData(userInfoURL); // Check to see if user.json exists
			
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
    				localStorage.setItem("userData", data);
    				
    				self.model = model;
    				self.renderHomeTemplate(self.model);
    			},
    			error: function(){
    				/* If user.json doesn't exist, create the userData model
    				 * and run the setup screen.
    				 */
    				self.createUserDataModel();
    			}
    		});
    		
		},
		
		renderHomeTemplate: function() {
		    
		    this.$el.html(this.opt.templates["home"](this.model));
		    
		},
		
		createUserDataModel: function() {
		    
		    var model = {
    			"name": null,
    			"team": null,
    			"news": {
    			    "NFL": true,
    			    "CBS": true,
    			    "ESPN": true,
    			    "KFFL": true,
    			    "Rotoworld": true
    			},
    			"players": []
    		}
    		
    		var data = JSON.stringify(model);
    		localStorage.setItem("userData", data);
    		
    		this.model = model;
    		this.renderSetupTemplate(model);
    		this.bindEvents();
    		
		},

		renderSetupTemplate: function() {
			// Render the Setup Template
			this.$el.html(this.opt.templates["setup"]);
			
		},

		bindEvents: function() {
			// Keep track of 'this'
			var self = this;

			// When you click the next button
			this.$el.find(".btn-next").on("click", function(e) {
				e.preventDefault();
				$this = $(this);
				self.animateToNextSlide($this);
			});

			// When you click the get started button
			this.$el.find(".btn-getStarted").on("click", function(e) {
				e.preventDefault();
				self.storeUserInformation();
				self.animateToHomeScreen();
			});
			
		},

		animateToNextSlide: function(elm) {
		    
			var $parent = elm.parent(); // Find the Parent
			var $pagination = this.$el.find(".pagination"); // Find the Pagination
			var $currentPagItem = $pagination.find(".active"); // Find the Active Item in the Pagination

			if(this.$el.find("#name").val() != "") {
				// Change Classes to Animate Screens
				$parent.addClass("finish");
				$parent.next().addClass("active");

				// Change Pagination Classes
				$currentPagItem.removeClass("active");
				$currentPagItem.next().addClass("active");
			}
			
		},

		storeUserInformation: function() {
		    
			var $elm = this.$el.find(".screen-welcome");
			this.model.name = $elm.find("#name").val();
			this.model.team = $elm.find("#team").val();

			var data = JSON.stringify(this.model);
			localStorage.setItem("userData", data);

			setTimeout(function(){
				$elm.remove();
			}, 1000);
			
		},

		animateToHomeScreen: function() {
		    
			if(this.$el.find("#team").val() != "") {
				this.$el.find(".screen-welcome").addClass("animate-out");
				this.renderHomeTemplate();
			}
			
		}
	};
});
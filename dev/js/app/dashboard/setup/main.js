define(function (require) {

	var home;

	return {
		init: function(model) {

			home = require('../home/main');

			this.opt = {
				scope: $("#main"),
				templates: Handlebars.templates,
				model: model
			}

			this.$el = this.opt.scope;
			this.model = this.opt.model;

			this.renderTemplate();
			this.bindEvents();
		},

		renderTemplate: function() {
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
				home.init(this.model);
			}
		}
	};
});
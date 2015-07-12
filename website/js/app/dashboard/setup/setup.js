define(function () {

	return {
		init: function (model) {

			/*
			 * Setup Options
			 *
			 */
			this.opt = {
				scope: $(".screen-welcome"),
				templates: Handlebars.templates,
				model: model
			}

			/*
			 * Shorten Reference to Scope
			 *
			 */
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

				$this = $(this);
				self.storeUserInformation();
				self.animateToHomeScreen();
			});
		},

		animateToNextSlide: function(elm) {
			var $parent = elm.parent();
			var $pagination = this.$el.find(".pagination");
			var $currentPagItem = $pagination.find(".active");

			$parent.addClass("finish");
			$parent.next().addClass("active");

			$currentPagItem.removeClass("active");
			$currentPagItem.next().addClass("active");
		},

		storeUserInformation: function() {
			this.model.name = this.$el.find("#name").val();
			this.model.team = this.$el.find("#team").val();
		},

		animateToHomeScreen: function() {
			this.$el.addClass("animate-out");
		}
	};
});
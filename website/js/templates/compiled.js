this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"screen-home\">\n	<div class=\"header\">\n		<h1>Hello, "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n	</div>\n	<div class=\"info-bar\">\n		<ul>\n			<li><a href=\"#\"><i class=\"fa fa-newspaper-o\"></i></a></li>\n			<li><a href=\"#\"><i class=\"fa fa-users\"></i></a></li>\n			<li><a href=\"#\"><i class=\"fa fa-area-chart\"></i></a></li>\n			<li><a href=\"#\"><i class=\"fa fa-rocket\"></i></a></li>\n			<li><a href=\"#\"><i class=\"fa fa-cogs\"></i></a></li>\n		</ul>\n	</div>\n	<div class=\"screen-content\"></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["setup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"screen-welcome\">\n	<div class=\"screen screen-name active\">\n		<h2>Hello, what is your name?</h2>\n		<label for=\"name\">\n			<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-next\">Next</a>\n	</div>\n	<div class=\"screen screen-team\">\n		<h2>What is your favorite team?</h2>\n		<label for=\"team\">\n			<input id=\"team\" name=\"team\" type=\"text\" placeholder=\"Team\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-getStarted\">Get Started</a>\n	</div>\n	<ul class=\"pagination\">\n		<li class=\"active\"></li>\n		<li></li>\n	</ul>\n</div>";
},"useData":true});
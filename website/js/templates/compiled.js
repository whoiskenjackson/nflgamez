this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["setup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"screen screen-name active\">\n	<h2>Hello, what is your name?</h2>\n	<label for=\"name\">\n		<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" />\n	</label>\n	<a href=\"#\" class=\"btn btn-next\">Next</a>\n</div>\n<div class=\"screen screen-team\">\n	<h2>What is your favorite team?</h2>\n	<label for=\"team\">\n		<input id=\"team\" name=\"team\" type=\"text\" placeholder=\"Team\" />\n	</label>\n	<a href=\"#\" class=\"btn btn-getStarted\">Get Started</a>\n</div>\n<ul class=\"pagination\">\n	<li class=\"active\"></li>\n	<li></li>\n</ul>";
},"useData":true});
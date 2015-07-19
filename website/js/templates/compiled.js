this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"screen-home\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"#\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n		<ul>\n			<li><a href=\"#\"><i class=\"fa fa-tachometer\"></i> Dashboard</a></li>\n			<li><a href=\"#\"><i class=\"fa fa-newspaper-o\"></i> Latest News</a></li>\n			<li><a href=\"#\"><i class=\"fa fa-trophy\"></i> Rankings</a></li>\n			<li><a href=\"#\"><i class=\"fa fa-users\"></i> Player Stats</a></li>\n			<li><a href=\"#\"><i class=\"fa fa-rocket\"></i> Game Center</a></li>\n		</ul>\n	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row\">\n			<div class=\"screen-column\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-blue\">\n						<h3>Recent News</h3>\n					</div>\n					<div class=\"screen-item-content\">\n						<ul>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502466/article/brett-favre-inducted-into-packers-hall-of-fame\">Brett Favre inducted into Packers Hall of Fame</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502445/article/marshall-calls-kyle-orton-best-qb-he-ever-played-with\">Marshall calls Kyle Orton best QB he ever played with</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502450/article/pats-edelman-on-tom-brady-hes-a-little-ticked-off\">Pats' Edelman on Tom Brady: 'He's a little ticked off'</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502449/article/demaryius-aiming-for-nfls-receiving-yardage-mark\">Demaryius aiming for NFL's receiving yardage mark</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502501/article/jermaine-gresham-set-to-visit-cardinals-this-week\">Jermaine Gresham set to visit Cardinals this week</a></li>\n							<li><a href=\"#\">More News...</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n			<div class=\"screen-column\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-green\">\n						<h3>Rankings</h3>\n					</div>\n					<div class=\"screen-item-content\">\n						<ul>\n							<li><a href=\"#\" data-id=\"2540168\" data-esbid=\"LAC702361\" data-gsisPlayerId=\"00-0030485\" data-teamAbbr=\"GB\" data-rank=\"1\" data-position=\"RB\">1. Eddie Lacy</a></li>\n							<li><a href=\"#\" data-id=\"2507164\" data-esbid=\"PET260705\" data-gsisPlayerId=\"00-0025394\" data-teamAbbr=\"MIN\" data-rank=\"2\" data-position=\"RB\">2. Adriane Peterson</a></li>\n							<li><a href=\"#\" data-id=\"925\" data-esbid=\"CHA561428\" data-gsisPlayerId=\"00-0026213\" data-teamAbbr=\"KC\" data-rank=\"3\" data-position=\"RB\">3. Jamaal Charles</a></li>\n							<li><a href=\"#\" data-id=\"2540175\" esbid=\"BEL474300\" gsisPlayerId=\"00-0030496\" data-teamAbbr=\"PIT\" data-rank=\"4\" data-position=\"RB\">4. La'Veon Bell</a></li>\n							<li><a href=\"#\" data-id=\"234\" data-esbid=\"FOR645404\" data-gsisPlayerId=\"00-0026184\" data-teamAbbr=\"CHI\" data-rank=\"5\" data-position=\"RB\">5. Matt Forte</a></li>\n							<li><a href=\"#\">More Rankings...</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["setup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"screen-welcome\">\n	<div class=\"screen screen-name active\">\n		<h2>Hello, what is your name?</h2>\n		<label for=\"name\">\n			<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-next\">Next</a>\n	</div>\n	<div class=\"screen screen-team\">\n		<h2>What is your favorite team?</h2>\n		<label for=\"team\">\n			<input id=\"team\" name=\"team\" type=\"text\" placeholder=\"Team\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-getStarted\">Get Started</a>\n	</div>\n	<ul class=\"pagination\">\n		<li class=\"active\"></li>\n		<li></li>\n	</ul>\n</div>";
},"useData":true});
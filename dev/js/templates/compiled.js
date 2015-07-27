this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"screen-home screen-main\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"preferences.html\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n"
    + ((stack1 = this.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row\">\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-blue\">\n						<h3>Recent News</h3>\n					</div>\n					<div class=\"screen-item-content\">\n						<ul>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502466/article/brett-favre-inducted-into-packers-hall-of-fame\">Brett Favre inducted into Packers Hall of Fame</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502445/article/marshall-calls-kyle-orton-best-qb-he-ever-played-with\">Marshall calls Kyle Orton best QB he ever played with</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502450/article/pats-edelman-on-tom-brady-hes-a-little-ticked-off\">Pats' Edelman on Tom Brady: 'He's a little ticked off'</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502449/article/demaryius-aiming-for-nfls-receiving-yardage-mark\">Demaryius aiming for NFL's receiving yardage mark</a></li>\n							<li><a href=\"http://www.nfl.com/news/story/0ap3000000502501/article/jermaine-gresham-set-to-visit-cardinals-this-week\">Jermaine Gresham set to visit Cardinals this week</a></li>\n							<li><a href=\"#\">More News...</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-green\">\n						<h3>Rankings</h3>\n					</div>\n					<div class=\"screen-item-content\">\n						<ul>\n							<li><a href=\"#\" data-id=\"2540168\" data-esbid=\"LAC702361\" data-gsisPlayerId=\"00-0030485\" data-teamAbbr=\"GB\" data-rank=\"1\" data-position=\"RB\">1. Eddie Lacy</a></li>\n							<li><a href=\"#\" data-id=\"2507164\" data-esbid=\"PET260705\" data-gsisPlayerId=\"00-0025394\" data-teamAbbr=\"MIN\" data-rank=\"2\" data-position=\"RB\">2. Adriane Peterson</a></li>\n							<li><a href=\"#\" data-id=\"925\" data-esbid=\"CHA561428\" data-gsisPlayerId=\"00-0026213\" data-teamAbbr=\"KC\" data-rank=\"3\" data-position=\"RB\">3. Jamaal Charles</a></li>\n							<li><a href=\"#\" data-id=\"2540175\" esbid=\"BEL474300\" gsisPlayerId=\"00-0030496\" data-teamAbbr=\"PIT\" data-rank=\"4\" data-position=\"RB\">4. La'Veon Bell</a></li>\n							<li><a href=\"#\" data-id=\"234\" data-esbid=\"FOR645404\" data-gsisPlayerId=\"00-0026184\" data-teamAbbr=\"CHI\" data-rank=\"5\" data-position=\"RB\">5. Matt Forte</a></li>\n							<li><a href=\"#\">More Rankings...</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["news"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"screen-news screen-main\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"preferences.html\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n"
    + ((stack1 = this.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row filter\">\n			<div class=\"screen-column column-1\">\n				<div class=\"screen-item\"><a href=\"#\"><span><i class=\"fa fa-newspaper-o\"></i></span> All News</a></div>\n			</div>\n			<div class=\"screen-column column-1\">\n				<div class=\"screen-item\"><a href=\"#\"><span><i class=\"fa fa-users\"></i></span> Team News</a></div>\n			</div>\n			<div class=\"screen-column column-1\">\n				<div class=\"screen-item\"><a href=\"#\"><span><i class=\"fa fa-user\"></i></span> Player News</a></div>\n			</div>\n			<div class=\"screen-column column-1\">\n				<div class=\"screen-item\"><a href=\"#\"><span><i class=\"fa fa-globe\"></i></span> News Outlets</a></div>\n			</div>\n		</div>\n		<div class=\"screen-row\">\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header\">\n						<a href=\"http://www.rotoworld.com/player/nfl/1813/philip-rivers\">\n							<img src=\"images/chargers/logo-001.png\"/>\n							<h3>Rivers appears poised to play out contract yr - Philip Rivers | SD</h3>\n						</a>\n					</div>\n				</div>\n			</div>\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header\">\n						<a href=\"http://www.rotoworld.com/player/nfl/8764/josh-hill\">\n							<img src=\"images/saints/logo-001.png\"/>\n							<h3>Saints will use 'committee' to replace Graham - Josh Hill | NO</h3>\n						</a>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"screen-row\">\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header\">\n						<a href=\"http://www.rotoworld.com/player/nfl/1813/philip-rivers\">\n							<img src=\"images/chargers/logo-001.png\"/>\n							<h3>Rivers appears poised to play out contract yr - Philip Rivers | SD</h3>\n						</a>\n					</div>\n				</div>\n			</div>\n			<div class=\"screen-column column-2\">\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header\">\n						<a href=\"http://www.rotoworld.com/player/nfl/8764/josh-hill\">\n							<img src=\"images/saints/logo-001.png\"/>\n							<h3>Saints will use 'committee' to replace Graham - Josh Hill | NO</h3>\n						</a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"screen-player screen-main\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"preferences.html\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n"
    + ((stack1 = this.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row filter\">\n			<div class=\"screen-column column-4\">\n				<div class=\"screen-item\">\n				    <ul>\n				        <li class=\"filter-draft\"><a href=\"#\" data-draftrank=\"true\">Draft Rankings</a></li>\n				        <li class=\"filter-position\"><strong>Position:</strong></li>\n				        <li><a href=\"#\" data-weekrank=\"QB\">QB</a></li>\n				        <li><a href=\"#\" data-weekrank=\"WR\">WR</a></li>\n				        <li><a href=\"#\" data-weekrank=\"RB\">RB</a></li>\n				        <li><a href=\"#\" data-weekrank=\"TE\">TE</a></li>\n				        <li><a href=\"#\" data-weekrank=\"WR-RB-TE\">WR / RB / TE</a></li>\n				        <li><a href=\"#\" data-weekrank=\"K\">K</a></li>\n				        <li><a href=\"#\" data-weekrank=\"DEF\">DEF</a></li>\n				    </ul>\n				</div>\n			</div>\n		</div>\n		<div class=\"screen-row\">\n			<div class=\"screen-column column-4 players-list\"></div>\n			<div class=\"more-container\">\n				<a href=\"#\" class=\"load-more\">Load More</a>\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["players-list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"screen-item\">\n	<div class=\"screen-item-content\">\n		<a href=\"#\" class=\"stats-link\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n			<span class=\"player-rank\">"
    + alias3(((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rank","hash":{},"data":data}) : helper)))
    + ".</span>\n			<span class=\"player-image team-"
    + alias3(((helper = (helper = helpers.teamAbbr || (depth0 != null ? depth0.teamAbbr : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"teamAbbr","hash":{},"data":data}) : helper)))
    + "\"><img src=\"http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/"
    + alias3(((helper = (helper = helpers.esbid || (depth0 != null ? depth0.esbid : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"esbid","hash":{},"data":data}) : helper)))
    + ".png\"></span>\n			<span class=\"player-name\">"
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\n			<span class=\"player-position\">"
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + "</span>\n			<span class=\"player-team\">"
    + alias3(((helper = (helper = helpers.teamAbbr || (depth0 != null ? depth0.teamAbbr : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"teamAbbr","hash":{},"data":data}) : helper)))
    + "</span>\n		</a>\n		<a href=\"#\" class=\"follow-link "
    + alias3((helpers.following || (depth0 && depth0.following) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"following","hash":{},"data":data}))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-flag\"></i></a>\n	</div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.players : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["preferences"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "						<label for=\"news\">\n						    <input type=\"checkbox\" "
    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " name=\"news\" value=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" /> "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n						</label>\n";
},"2":function(depth0,helpers,partials,data) {
    return "checked";
},"4":function(depth0,helpers,partials,data) {
    return "						<label for=\"news\">\n						    <input type=\"checkbox\" name=\"player\" /> NFL\n						</label>\n";
},"6":function(depth0,helpers,partials,data) {
    return "						<p>No players are currently being followed.</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"screen-preferences screen-main\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"preferences.html\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n"
    + ((stack1 = this.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row\">\n			<div class=\"screen-column\">\n				<div class=\"screen-item user-info\">\n					<div class=\"screen-item-header header-blue\">\n						<h3>User Info</h3>\n					</div>\n					<div class=\"screen-item-content\">\n						<h4>Name:</h4>\n						<label for=\"name\">\n						    <input type=\"text\" name=\"name\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\n						</label>\n						<h4>Favorite Team:</h4>\n						<label for=\"team\">\n						    <input type=\"text\" name=\"team\" value=\""
    + alias3(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"team","hash":{},"data":data}) : helper)))
    + "\" />\n						</label>\n					</div>\n				</div>\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-green\">\n						<h3>News Outlets</h3>\n					</div>\n					<div class=\"screen-item-content\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.news : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-blue\">\n						<h3>Players to Follow</h3>\n					</div>\n					<div class=\"screen-item-content\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.players : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n				\n				<div class=\"screen-item\">\n					<div class=\"screen-item-header header-green\">\n						<h3>Export Data</h3>\n					</div>\n					<div class=\"screen-item-content\">\n					    <label for=\"export\">\n					        <p>To keep user data, copy and past the text below into a file named 'user.json'. Save that file in the 'js/app/settings/' directory.</p>\n						    <textarea name=\"export\"></textarea>\n						</label>\n					</div>\n				</div>\n\n				<a href=\"#\" class=\"btn btn-save\">Save</a>\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["rankings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"screen-rankings screen-main\">\n	<header class=\"header\">\n		<h1>Dashboard</h1>\n		<h2>Hello, <strong>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><a href=\"preferences.html\"><i class=\"fa fa-cogs\"></i></a></h2>\n	</header>\n	<div class=\"sidebar\">\n"
    + ((stack1 = this.invokePartial(partials.sidebar,depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"screen-content\">\n		<div class=\"screen-row filter\">\n			<div class=\"screen-column column-4\">\n				<div class=\"screen-item\">\n				    <ul>\n				        <li class=\"filter-draft\"><a href=\"#\" data-draftrank=\"true\">Draft Rankings</a></li>\n				        <li class=\"filter-position\"><strong>Position:</strong></li>\n				        <li><a href=\"#\" data-weekrank=\"QB\">QB</a></li>\n				        <li><a href=\"#\" data-weekrank=\"WR\">WR</a></li>\n				        <li><a href=\"#\" data-weekrank=\"RB\">RB</a></li>\n				        <li><a href=\"#\" data-weekrank=\"TE\">TE</a></li>\n				        <li><a href=\"#\" data-weekrank=\"WR-RB-TE\">WR / RB / TE</a></li>\n				        <li><a href=\"#\" data-weekrank=\"K\">K</a></li>\n				        <li><a href=\"#\" data-weekrank=\"DEF\">DEF</a></li>\n				    </ul>\n				</div>\n			</div>\n		</div>\n		<div class=\"screen-row\">\n			<div class=\"screen-column column-4 players-list\"></div>\n			<div class=\"more-container\">\n				<a href=\"#\" class=\"load-more\">Load More</a>\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["setup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"screen-welcome\">\n	<div class=\"screen screen-name active\">\n		<h2>Hello, what is your name?</h2>\n		<label for=\"name\">\n			<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-next\">Next</a>\n	</div>\n	<div class=\"screen screen-team\">\n		<h2>What is your favorite team?</h2>\n		<label for=\"team\">\n			<input id=\"team\" name=\"team\" type=\"text\" placeholder=\"Team\" />\n		</label>\n		<a href=\"#\" class=\"btn btn-getStarted\">Get Started</a>\n	</div>\n	<ul class=\"pagination\">\n		<li class=\"active\"></li>\n		<li></li>\n	</ul>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n	<li><a href=\"index.html\"><i class=\"fa fa-tachometer\"></i> Dashboard</a></li>\n	<li><a href=\"news.html\"><i class=\"fa fa-newspaper-o\"></i> Latest News</a></li>\n	<li><a href=\"rankings.html\"><i class=\"fa fa-trophy\"></i> Rankings</a></li>\n	<li><a href=\"player.html\"><i class=\"fa fa-users\"></i> Player Stats</a></li>\n	<li><a href=\"#\"><i class=\"fa fa-rocket\"></i> Game Center</a></li>\n</ul>";
},"useData":true});
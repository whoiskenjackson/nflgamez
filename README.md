#nflgamez

NFL Dashboard and Game Center. An elegant way to keep track of NFL news, player news and statistics, live game statistics, and more.

###Getting Started

####Clone the Repo

* `git clone https://github.com/whoiskenjackson/nflgamez.git`

####Install Packages

* Inside of the nflgamez directory: `npm install`

####Making Updates

For now the code base lives within the `website` directory. It should probably be moved the the `dev` directory.

* `grunt watch --env=website`

###Technology

* jQuery
* RequireJS
* Handlebars
* SCSS

####To Update

* Backbone
* MongoDB

##The App

The goal of the app is to have a curated list of news and stats about the NFL, teams, and players. Along side the curated information there would be a Game Center that would update statistics of players and games via a live data stream.

###News Feed

Pull in RSS Feeds from various news sources to give a variety of content on the NFL and Players.

####Feeds

* NFL: http://www.nfl.com/rss/rsslanding?searchString=home
* ESPN: http://sports.espn.go.com/espn/rss/nfl/news
* CBS: http://www.cbssports.com/partners/feeds/rss/nfl_news
* Rotoworld: http://www.rotoworld.com/rss/feed.aspx?sport=nfl&ftype=news&count=20&format=rss
* KFFL (Breaking News): http://www.kffl.com/printRSS.php/NFL
* KFFL (General News): http://www.kffl.com/printRSS.php/NFL-NFL

####ToDo:

* Make news filterable based off of Favorite Team, Teams, and news networks.
* Add functionality to tie news items to team logos and players.
* Add functionality to possible to news items to player ID's and follow that player.

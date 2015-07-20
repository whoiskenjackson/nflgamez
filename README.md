#nflgamez

NFL Dashboard and Game Center. An elegant way to keep track of NFL news, player news and statistics, live game statistics, and more.

###Getting Started

####Fork / Clone the Repo

* Fork the repo.
* Clone to your machine.
* Submit Pull Requests tied to issues.

####Install Packages

* Inside of the nflgamez directory: `npm install`

####Making Updates

For now the code base lives within the `website` directory. It should probably be moved the the `dev` directory.

* `grunt watch --env=website`

###Technology

* jQuery
* RequireJS
* LoDash
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

###Players Feed

Pull in Player Data from NFL.com's API to give the user a variety of information used to keep track of all NFL Players and Players they would like to follow.

####API's

All API's should be retrieved in a JSON format.

* Rankings: 
  * Editor Rankings: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersEditorDraftRanks
  * User Rankings: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersUserDraftRanks
  * Editor Weekly Rankings: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersEditorWeekRanks
* Player Data:
  * Player Research Info: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersResearchInfo
  * Player News (May not be needed): http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersNews
  * Individual Player Data: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersDetails
* Player Stats:
  * Scoring Leaders: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersScoringLeaders
  * Player Stats (per Week): http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersStats
  * Player Stats Advanced (per Week): http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersAdvanced

###Game Center

Game Center should pull in Live Data from NFL.com and update stats, charts, and player information.

####API's

All API's should be retrieved in JSON format.

* Live Game Stats:
  * Player Week Stats: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersWeekStats
  * Player Week Highlight Videos: http://api.fantasy.nfl.com/v1/docs/service?serviceName=playersWeekVideos

###Preferences

Preferences will be a place for the user to keep track of all of their information and have the ability to export their user settings. The User will have the ability to:

* Change User Name.
* Change Favorite Team.
* Adjust News Sources.
* Add Fantasy Football Scoring Settings.
* Export User Data.

##Other Notes

####API Stat ID's

```
1: Games
2: Passing Attempts
3: Passing Completions
5: Passing Yards
6: Passing Touchdowns
7: Interceptions
8: Sacks
13: Rushing Attempts
14: Rushing Yards
15: Rushing Touchdowns
20: Receptions
21: Recieving Yards
22: Revieving Touchdowns
30: Fumble Lost?
31: Fumbles
70: Tackles
```
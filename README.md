# Gretarnator
Open API for Grétars nicknames.

Just a heads up: This project is currently just hosted on Heroku, so it might take some time for the project to "spin up" if it hasn't been visited in a while.

## Routes:

http://gretarator.com/ -> Random nickname front page!

http://gretarator.com/api/nicknames  -> [GET] List of all nicknames.

http://gretarator.com/api/nicknames/random  -> [GET] Single random nickname.

http://gretarator.com/api/nicknames/:nickname  -> [DELETE] Delete a nickname by name.

http://gretarator.com/api/nicknames  -> [POST] Add a new nickname to the list.

## Input model:

{

  "nickname" : "example nickname",
  
  "author" : "your name",
  
  "description" : "whatever you want to say about this nickname"
  
}

author and description are optional properties.

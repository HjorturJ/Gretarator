# Gretarnator
Open API for Grétars nicknames.

## Routes:

https://gretarnator-api.herokuapp.com/ -> Random nickname front page!

https://gretarnator-api.herokuapp.com/api/nicknames  -> [GET] List of all nicknames.

https://gretarnator-api.herokuapp.com/api/nicknames/random  -> [GET] Single random nickname.

https://gretarnator-api.herokuapp.com/api/nicknames/:nickname  -> [DELETE] Delete a nickname by name.

https://gretarnator-api.herokuapp.com/api/nicknames  -> [POST] Add a new nickname to the list.

## Input model:

{

  "nickname" : "example nickname",
  
  "author" : "your name",
  
  "description" : "whatever you want to say about this nickname"
  
}

author and description are optional properties.

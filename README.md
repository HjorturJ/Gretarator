# Gretarnator
Open API for Grétars nicknames.

## Routes:

https://gretarnator-api.herokuapp.com/api/nicknames  -> [GET] List of all nicknames.

https://gretarnator-api.herokuapp.com/api/nicknames  -> [POST] Add a new nickname to the list.

https://gretarnator-api.herokuapp.com/api/nicknames/:nickname  -> [DELETE] Delete a nickname by name.

## Input model:

{

  "nickname" : "example nickname",
  
  "author" : "your name",
  
  "description" : "whatever you want to say about this nickname"
  
}

author and description are optional properties.

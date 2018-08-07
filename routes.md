BackEnd

HTML

Get StaticPages Controller

API Endpoints

Users
  GET /api/users
  POST /api/users
  PATCH /api/users/:id/edit

Events
  GET /api/events
  GET /api/events/:id
  POST /api/events
  PATCH /api/events/:id/edit
  DELETE /api/events/:id

Tickets
  GET /api/users/:userId/tickets
  GET /api/users/:userId/tickets/:id
  DELETE /api/users/:userId/tickets/:id

Likes
  GET /api/events/:eventId/likes
  DELETE /api/events/:eventId/likes

Categories
  GET /api/categories
  GET /api/categories/:id

Event Saves/Bookmarks
  GET /api/users/:userId/saves
  DELETE /api/users/:userId/saves

Follows
GET /api/users/:userId/follows
DELETE /api/users/:userId/follows


FrontEnd

Root
  App
    Navbar
    content
    footer

/
  splash
/login
  sessionForm
/signup
  session

/feed
  event_index
    event_index_item

/users/:userId/tickets
  TicketsIndex

/users/:userId/follows
  FollowsIndex

/users/:userId/saves
  SavesIndex
  
/user/:userId/edit
  accountsettings


/event/new
  eventform

/event/:eventId
  eventShow

event/:eventId/edit
  eventForm

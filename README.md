# nosql

Social Network API

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

# Run
1. Clone this repo
2. Install node packages ```npm install```
3. Make sure mongodb is running
4. Start the api server ```npm start```

# API

| Request | Title             | URL                                  | Body                                                                                                                                |
|---------|-------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| GET     | All Users         | /api/users                           |                                                                                                                                     |
| GET     | User By ID        | /api/users/:id                       |                                                                                                                                     |
| POST    | Create User       | /api/users                           | { 	"username": "manicMailman", 	"email": "rogermeyers@gmail.com" }                                                                    |
| PUT     | Update User By ID | /api/users/:id                       | { 	"username": "manicMailman", 	"email": "chesterlampwick@gmail.com" }                                                                |
| DELETE  | Delete User By ID | /api/users/:id                       |                                                                                                                                     |
| POST    | Create Thought    | /api/thoughts                        | {   "thoughtText": "My name is thispatcher and I play music",   "username": "thispatcher",   "userId": "userID" }                   |
| GET     | All Thoughts      | /api/thoughts                        |                                                                                                                                     |
| GET     | Thought By ID     | /api/thoughts/:id                    |                                                                                                                                     |
| PUT     | Update Thought    | /api/thoughts/:id                    | {   "thoughtText": "My name is thispatcher and I play music, and I write code",   "username": "thispatcher",   "userId": "userID" } |
| DELETE  | Delete a Thought  | /api/thoughts/:id                    |                                                                                                                                     |
| POST    | Add a Friend      | /api/users/:userId/friends/:friendId |                                                                                                                                     |
| DELETE  | Remove a friend   | /api/users/:userId/friends/:friendId |                                                                                                                                     |
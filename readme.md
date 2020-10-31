https://levelup.gitconnected.com/project-structure-and-building-routes-of-restful-api-with-node-js-f3a8b53d94e7

# Stucture

backend
│
└─── dist                   #all the javascript files are here
└─── lib                    #all the typescript files are here
      └─── config           #app configurations files
            └─── app.ts     #app starting point            
      └─── controllers      #request managers
      └─── modules          #schemas, interfaces, services
      └─── routes           #define the endpoints
      └─── environment.ts   #store all environment variables
      └─── server.js        #HTTP server that listens to server port
└─── .gitignore             #git ignore file
└─── package-lock.json      #npm automatically generated document
└─── package.json           #holds metadata and npm packagage list
└─── tsconfig.json          #specify the root level files and the                                              
.                            compiler options


mongodb://admin:secure@localhost:27017/admin


Use of CRUD?
CRUD stands for Create, Read, Update, and Delete. with regards to its use in REST API, CRUD is the standardized use of HTTP request.
GET: for retrieving data
POST: for creating new data
PUT / PATCH: for updating data
DELETE: for deleting data
Use of Status Codes?
When monitoring,it is easier to know the health of an application by its status code. However, for some REST services the HTTP status code is not well defined.
The most common codes to use for any HTTP request are:
200 — OK
404 — Not found
500 — Internal Server Error
One can then expand to a more detailed set of statuses if required, such as:
201 — Created
204 — No Content
304 — Modified
400 — Bad Request
401 — Unauthorized
403 — Forbidden
501 — Not Implemented
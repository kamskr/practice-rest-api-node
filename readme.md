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
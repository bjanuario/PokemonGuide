# Pokemon Project (API and App)

## Requirements

1. Install CouchDB on your computer
    1. For [Windows](https://docs.couchdb.org/en/stable/install/windows.html)
    1. For [Linux](https://docs.couchdb.org/en/stable/install/unix.html)
    1. For [MacOS](https://docs.couchdb.org/en/3.1.1/install/mac.html)
    1. Run CouchDB
   

###2. Run the Pokemon API
   1. Go to PokemonAPI folder
   1. Run `npm install`
   1. Change the values accord your CouchDB settings at `PokemonAPI/src/datasources/mongodb.datasource.ts`
   1. Run `npm start`
   1. Address should be http://localhost:3000 if you don't change it, you can play with it open your browser anf hit: http://localhost:3000/explorer/


###3. Run the Pokemon App
   1. Go to PokemonAPI folder
   1. Run `npm install`
      1. Default Pokemon API Url is: http://localhost:3000, if you want to change it, go to line 17 at `PokemonAPP/src/app/api/base-service.ts`
   1. Run `ng serve`

4. Go to address localhost:4200 (if you don't change it)

## More documentation

Access README.md on each project folder (API & App)

######_Provided by: Bruno Januário_

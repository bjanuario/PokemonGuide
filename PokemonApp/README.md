# PokemonApp

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.
* Depends on loopback OpenAPI v4 (see root README.md for more info)

## Requirements

1. Run the PokemonAPI before this project starts

1. Run `npm install` on the root directory

Note: On MacOS you need to have xcode-tools installed

## Documentation guide code

### If you want to build:

1. Run `npm run generate-docs` on root folder
1. Go to folder `documentation`
1. Open `index.html` on your browser

### If you want to serve:

1. Run `npm run serve-docs` on root folder
1. Open your browser at `http://127.0.0.1:8080`
1. Navigate

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running lint tests

Run `ng lint` to execute the unit tests via [Karma](https://karma-runner.github.io).


# Operate the App
* Initial State
  * When load you get the Pokémon in a pagination style
  * Use previous / next to navigate between pages
* Search
  * You can search by name or Id, select the input you want
* Filters
  * There are 2 types of filter: by Type and by Favourite
  * The filters result return all the records
  * Sorting is available, click again on desired filter and ir sort by ASC/DESC order
* Reset / Reload
  * At any time you can reset the page to its initial state
  
  
* Total information of Pokémon
  * On the table at column `Details` click on `View`, a popup will appear with all details of the pokenon
  

* Mark / Unmark a pokemon as favourite
  * `I am not your favourite` means the current Pokémon is not favourite, to mark click on the button
  * `I am your favourite` means the current Pokémon is favourite, to unmark click on the button
  * A color indicate the favourite state: yellow = favourite, grey = not favourite


* Other options
  * Create a Pokémon is available at the code but disable by default
  * You can use the API standard format or the OpenAPI format, both ways are used
###### _Provided by: Bruno Januário_

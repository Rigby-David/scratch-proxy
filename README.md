## Client Side -- Server Side 
-- clients make requests, servers make responses
-- client side (front end) is the user's computer 
-- server side (back end) is every other computer
-- supabase is a proxy. it makes requests and responses
-- SQL only makes responses

-- if you're hitting third party API, you'll get CORS, so you need a server to pass through to prevent CORS errors
-- CORS - chrome stops API responses from different domains

-- API is a collection of ENDPOINTS
-- ENDPOINTS are URLs that let us play with data
-- GET ENDPOINT - used for reading data
-- POST ENDPOINT - used for creating data

-- API is a way to get JSON
"make a call to the API"
"make a request to the API"
"hit the API"
-- all mean the same thing
-- we use Postman to hit APIs as devs
-- pokemon.js is our netlify function which requests and responds to client and server (pokemon API)

-- JS's superpower: 1) can manipulate DOM elements 2) make requests to the back end
-- Node's superpower: 1) can create/delete files(sql) 2)listen for and respond to requests

-- Postman to make a GET request to hit the pokedex API
-- When you hit SEND in Postman, it goes to exports.handler = async (event, context) function in functions, then goes to the API them makes a response which goes to Postman

### POSTMAN ###
-- npm run dev
-- this terminal will now show consoles. get your localhost:8888 from here. copy your API into your netlify/functions and your location host into Postman -- something like this  http://localhost:8888/.netlify/functions/pokemon


### Plan
--- Postman http://localhost:8888/.netlify/funcstions/pokemon in GET URL

-- in functions directory, paste this URL {https://pokedex-alchemy.herokuapp.com/api/pokedex?page=3&perPage=50} in fetch on line 13

-- will need a fetch-utils with a getPokemon to get backend
    - const rawData = await fetch('localhost...')
    - const data = await rawData.json

in App.js we'll need some state and import useState and getPokemon from fetch-utils
    -useEffect to get pokemon on load
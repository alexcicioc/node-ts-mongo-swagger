# Setup

### Nodemon
1. Developed on node 12, if you have a different version either install nvm or use the docker solution
1. Update config.ts with the proper mysql instance variables
1. `npm install -g nodemon`
1. `nodemon src/index.ts -- --project tsconfig.json`

### Running tests
1. Make sure you have npm installed
1. `npm run build && npm run api-tests`

### Running the project with Docker (recommended)
1. Docker will install all the dependencies including mysql and a mysql client called phpmyadmin (accessible from http://localhost:8090/)
1. If docker is not installed run this command `sudo apt install docker`
1. Copy .env.example as .env
1. `make rebuild`

### Running tests in docker
1. `docker exec -it menu_api sh`
1. `npm run build && npm run api-tests`


### Populating the database
There's no need for a sql import file, sequelize will automatically create the table structure based on the schema

### Testing the API
1. Go to https://editor.swagger.io/
1. Copy the spec contents from ./specs/menu-api.yaml
1. Paste it in swagger editor
1. Run requests from swagger editor

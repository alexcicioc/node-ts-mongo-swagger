# Setup

### Nodemon
1. Developed on node 12, if you have a different version either install nvm or use the docker solution
1. `npm install -g nodemon`
1. `nodemon src/index.ts -- --project tsconfig.jso`

### Docker
1. If docker is not installed run this command `sudo apt install docker`
1. Copy .env.example as .env
1. `make rebuild`

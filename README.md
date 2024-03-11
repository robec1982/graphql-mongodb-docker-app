# graphql-mongodb-docker-app
Docker-ready version of the examples studied in GraphQL courses at LinkedIn Learning. This project builds a Docker-based, Node.js app that works with a GraphQL API. It persists data thorugh a MongoDB database hosted in an independent container. The containerized app is built and launched using **docker-compose**.

### Setup
#### 1. Configure environment variables
Use the `.env` files to set your environment variables. Note that you have to define the files `.env.example` and `./graphqlapp/.env.example`. The variables below are suggested to get a common configuration for this kind of projects. However, you can add/delete/modify variables on your needs. Be sure that you are not using the local ports defined for `MONGODB_LOCAL_PORT` and `NODE_LOCAL_PORT` in your machine.
```
MONGODB_USER=admin
MONGODB_PASSWORD=1234
MONGODB_DATABASE=widgets
MONGODB_LOCAL_PORT=7017
MONGODB_DOCKER_PORT=27017

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080
```
#### 2. Build the docker project using docker-compose from the root folder:
`docker compose build`
You must use this command every time you make changes in your project for the containers to be rebuilt.

#### 3. Start the Docker-based app:
You can use either `docker compose up` or `docker compose up -d` to run it in your local, Docker environment. The first option allows you to watch the app in the command line, which does not work when using the `-d`, as it makes the app running in background.

### How to stop it
To stop the container you can use `docker compose down` from the root folder.

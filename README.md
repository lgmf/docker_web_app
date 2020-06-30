# Docker Web App

This is just a study of the docker-compose.

The purpose was to integrate a nodejs app with mysql database

## Dependencies
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Running
First you'll need to create a symbolic link in order to create a `.env` file

```sh
 ln .env.example .env
```

Then, on the project root directory run

```sh
 docker-compose up
```

You will be able to access the server through http://localhost:5000

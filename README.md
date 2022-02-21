
# Docker-Laravel-Postgres-Nginx-PG Admin

Simple docker-compose for Laravel, with postgresql, nginx and php-fpm-alpine

# Pre-requisites

-   Docker running on the host machine.
-   Docker compose running on the host machine.
-   Basic knowledge of Docker.

# Installation

-   To get started, the following steps needs to be taken:
-   Clone the repo.
-   `cd laravel-vuejs-postresql-docker  to the project directory.

**application**  directory.
-   `cd ..`  to back the project directory.
-   Run  `docker-compose up -d`  to start the containers.
-   Visit  [http://localhost:8000]  to see your Laravel application.
-  Visit  [http://localhost:3000]  to see your Laravel application.

# usage:

-   `docker-compose up -d`  to start all containers
-   `docker-compose down`  to stop all containers
-   If you need to restart after modifying  _docker-compose.yml_  restart with  `docker-compose down`  and  `docker-compose up -d`

# Images

-   postgres:12.3-alpine
-   nginx:stable-alpine
-  PG Admin 4
-   php 8.0-fpm-alpine

# SourceFiles

 - Laravel : ./Server path
 - Vuejs : ./Client 
 - docker: .docker

## If you need to restart after modifying  _Dockerfile_  and have Troubleshooting:

-   Verify all containers running:  `docker ps -a`
-   Stop all containers and remove:  `docker stop $(docker ps -a -q)`  and  `docker rm $(docker ps -a -q)`
-   Try to start again  `docker-compose up -d`
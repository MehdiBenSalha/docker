# NestJS Dockerized with MongoDB Example

This project demonstrates how to containerize a NestJS (Node.js) application with MongoDB using Docker.
Both the backend and the database are run in different containers, configured with docker compose

## Prerequisites

Before running this application, make sure you have the following installed:

- Docker
- Docker Compose

## Getting Started

Follow these steps to run the application locally using Docker:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/nestjs-docker-mongodb.git

2. Navigate to the project directory:

   ```bash
    cd tp-docker

3. Run Docker Compose to build and start the containers:
   ```bash
    docker-compose up --build

Once the containers are up and running, you can access the NestJS application at http://localhost:3000/api.

Project Structure
The project structure is as follows:

server/: Contains the NestJS application.
 
Dockerfile: Defines instructions for building the Docker image of the NestJS application.
package.json: Specifies dependencies and scripts for the NestJS application.
docker-compose.yml: Defines Docker services for the NestJS application and MongoDB.

Configuration
The MongoDB connection string is configured in the NestJS application. By default, it connects to MongoDB using the following connection string:

    mongodb://mongodb:27017/db_coffee

This assumes that the MongoDB container is named mongodb and exposes port 27017.

**Note**: The image is automatically created and pushed to the Docker Hub repository when you push the code to the GitHub repository.
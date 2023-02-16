
# Car-Shop

Project developed during the studies of the Back-End module of [Trybe](https://www.betrybe.com/)'s Full-Stack Web Development Course.

## Table of Contents

-   [Technologies Used](#technologies-used)
-   [Project Overview](#project-overview)
-   [Installation](#installation)
-   [Usage](#usage)

## Technologies Used

-   Node.js
-   TypeScript
-   MongoDB
-   Mongoose
-   Docker 
-   Jest
-   Mocha
-   Chai
-  Sinon

## Project Overview

This back-end project was developed using Node.js and TypeScript, and follows the principles of Domain Driven Design, as well as POO and SOLID. The database was created using MongoDB, and the connection to the API was made using Mongoose, an ODM (Object-Document Mapper) for MongoDB and Node.js. Moreover, the application relies on unit tests to ensure that the code works.

The main goal of this project is to practice the use of MongoDB and Mongoose, to manage a database of a car dealership. The API was developed with a focus on scalability and performance, and it was designed to be as flexible and extensible as possible. The project's code is organized into modules that represent different domains of the business logic, and each module contains its own set of entities, models, services, controllers and routes.

## Installation

1.  Clone the repository to your local machine
2.  Install the dependencies using `npm install`
3.  Initialize Docker containers with `docker-compose up -d`
4.  Run the project using `npm run dev`

## Usage

To use the API, you can send HTTP requests to the available endpoints using your preferred client (e.g. Postman, cURL, Insomnia, etc.). The available endpoints and their respective methods are:

  - ### POST `/cars`
    <details>

    This endpoint creates a new car in the database with the given information.

    #### Request Body

    The request body should be a JSON object with the following fields:
    ```json
    {
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the created car, including its unique identifier (id):
    ```json
    {
      "id": "63ead3f079303cdd3fca52b5",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
    </details>

    ---

  - ### POST `/motorcycles`
    <details>

    This endpoint creates a new motorcycle in the database with the given information.

    #### Request Body

    The request body should be a JSON object with the following fields:
    ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the created motorcycle, including its unique identifier (id):
    ```json
    {
      "id": "63eadef2225ffff17972f1ba",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    </details>

    ---

  - ### GET `/cars`
    <details>

    This endpoint fetches all cars from the database.

    #### Response
    If the request is successful, the server will respond with a JSON object containing an array of objects, containing the information of all cars:
    ```json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.99,
        "doorsQty": 4,
        "seatsQty": 5
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Tempra",
        "year": 1995,
        "color": "Black",
        "buyValue": 39,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ]
    ```
    </details>

    ---

  - ### GET `/motorcycles`
    <details>

    This endpoint fetches all motorcycles from the database.

    #### Response
    If the request is successful, the server will respond with a JSON object containing an array of objects, containing the information of all motorcycles:
    ```json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Honda Cbr 1000rr",
        "year": 2011,
        "color": "Orange",
        "status": true,
        "buyValue": 59.900,
        "category": "Street",
        "engineCapacity": 1000
      }
    ]
    ```
    </details>

    ---
  - ### GET `/cars/:id`

    <details>

    #### Request example `/cars/634852326b35b59438fbea2f`

    This endpoint gets a car based on its id, being a string.

    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the created car, including its unique identifier (id):
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
    </details>

    ---

  - ### GET `/motorcycles/:id`

    <details>

    #### Request example `/motorcycle/634852326b35b59438fbea2f`

    This endpoint gets a motorcycle based on its id, being a string.

    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the created motorcycle, including its unique identifier (id):
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    </details>

    ---

  - ### PUT `/cars/:id`
    <details>

    This endpoint updates a car in the database, using its id and a request body.

    #### Request Body

    The request body should be a JSON object with the following fields:
    ```json
    {
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```
    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the updated car, including its unique identifier (id):
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```
    </details>

    ---

  - ### PUT `/motorcycles/:id`
    <details>

    This endpoint updates a motorcycle in the database, using its id and a request body.

    #### Request Body

    The request body should be a JSON object with the following fields:
    ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    #### Response
    If the request is successful, the server will respond with a JSON object containing the information of the updated motorcycle, including its unique identifier (id):
    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
    </details>

    ---
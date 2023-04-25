# E-Commerce Back End

This is a back-end application for an e-commerce website that uses the latest technologies, allowing a manager at an internet retail company to compete with other e-commerce companies. It is built using Express.js API and Sequelize to interact with a MySQL database.
Installation

To run this application locally, please follow these steps:

    Clone the repository to your local machine.
    Navigate to the root directory of the application.
    Create an environment variable file (.env) in the root directory and set the following variables:
        DB_NAME: the name of your MySQL database
        DB_USER: your MySQL username
        DB_PASSWORD: your MySQL password
    Open your MySQL client and create a development database with the same name specified in the DB_NAME variable in your .env file.
    Run the following commands to install the dependencies and set up the database:

## bash

npm install
npm run seed

    After the database is seeded with test data, run the following command to start the server and sync the Sequelize models with the MySQL database:

## bash

npm start

    The server is now running and ready to accept API requests.

## Usage

This application provides several API routes for categories, products, and tags, which can be accessed using a tool like Insomnia or Postman. Here are the available routes:
Categories

    GET /api/categories: Retrieve all categories in the database in JSON format.
    GET /api/categories/:id: Retrieve a specific category by its ID in JSON format.
    POST /api/categories: Create a new category with the provided data. Requires a request body in JSON format with the category_name property.
    PUT /api/categories/:id: Update a specific category by its ID with the provided data. Requires a request body in JSON format with the category_name property.
    DELETE /api/categories/:id: Delete a specific category by its ID.

## Products

    GET /api/products: Retrieve all products in the database in JSON format, including their associated category and tag data.
    GET /api/products/:id: Retrieve a specific product by its ID in JSON format, including its associated category and tag data.
    POST /api/products: Create a new product with the provided data. Requires a request body in JSON format with the product_name, price, stock, category_id, and tagIds properties. The tagIds property should be an array of tag IDs.
    PUT /api/products/:id: Update a specific product by its ID with the provided data. Requires a request body in JSON format with the product_name, price, stock, category_id, and tagIds properties. The tagIds property should be an array of tag IDs.
    DELETE /api/products/:id: Delete a specific product by its ID.

## Tags

    GET /api/tags: Retrieve all tags in the database in JSON format.
    GET /api/tags/:id: Retrieve a specific tag by its ID in JSON format.
    POST /api/tags: Create a new tag with the provided data. Requires a request body in JSON format with the tag_name property.
    PUT /api/tags/:id: Update a specific tag by its ID with the provided data. Requires a request body in JSON format with the tag_name property.
    DELETE /api/tags/:id: Delete a specific tag by its ID.

## Walkthrough Video

[Link to walkthrough video](https://youtu.be/QUn5E0gEvuQ)

## Contributing

If you would like to
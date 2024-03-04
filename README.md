# E-Commerce Back End

## Description

This project is a back-end application for an e-commerce site built with Express.js and Sequelize. It utilizes a MySQL database to store data on products, categories, and tags. This application allows for easy management of an e-commerce site's inventory through a series of RESTful API routes that enable users to view, add, edit, and delete products, categories, and tags.

## Installation

To get started, clone this repository to your local machine. You will need `Node.js`, `npm`, and `MySQL` installed to run this application. Follow these steps to install the application:

1. Install NPM packages:
   ```sh
   npm install
Create a .env file in the root directory with the following contents, replacing values with your MySQL user and password:

plaintext

DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'

Log in to your MySQL shell and create the database by running:

sql

SOURCE db/schema.sql;

Exit the MySQL shell and seed the database with test data:

sh

npm run seed

Start the server:

sh

    npm start

Usage

Once the server is running, you can use an API client such as Insomnia or Postman to test the RESTful API routes.

    GET routes to view all categories, all products, and all tags:
        /api/categories
        /api/products
        /api/tags

    GET routes to view a single category, product, or tag by ID:
        /api/categories/:id
        /api/products/:id
        /api/tags/:id

    POST, PUT, and DELETE routes to create, update, and delete categories, products, and tags:
        /api/categories (POST)
        /api/categories/:id (PUT, DELETE)
        /api/products (POST)
        /api/products/:id (PUT, DELETE)
        /api/tags (POST)
        /api/tags/:id (PUT, DELETE)

Models and Relationships

The database contains the following models:

    Category
        id: Primary Key, Auto Increment
        category_name: String
    Product
        id: Primary Key, Auto Increment
        product_name: String
        price: Decimal, Validates as decimal
        stock: Integer, Default value of 10, Validates as numeric
        category_id: References Category model's id
    Tag
        id: Primary Key, Auto Increment
        tag_name: String
    ProductTag
        id: Primary Key, Auto Increment
        product_id: References Product model's id
        tag_id: References Tag model's id

Associations

    A Product belongs to a single Category, and a Category can have many Products.
    A Product can have many Tags, and a Tag can have many Products through the ProductTag model.

Contributions

Feel free to fork this repository and submit pull requests to contribute to its development. For any major changes, please open an issue first to discuss what you would like to change.
Questions

A walkthrough video demonstrating the functionality of the application and all acceptance criteria being met is available here.

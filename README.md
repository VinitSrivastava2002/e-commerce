# E-Commerce Application

This is a simple e-commerce application built using Node.js, Express.js, MongoDB, and other technologies.

# Features

--> User authentication using JWT (JSON Web Tokens)
--> CRUD operations for products, categories, and orders
--> Secure password storage using hashing
--> API endpoints for managing user sessions, products, categories, and orders
--> Technologies Used
--> Node.js: JavaScript runtime environment for server-side development.
--> Express.js: Web application framework for Node.js used to build RESTful APIs.
--> MongoDB: NoSQL database used to store product, category, order, and user data.
--> Mongoose: MongoDB object modeling tool for Node.js used to define schemas and interact with the database.
--> JSON Web Tokens (JWT): Standard for securely transmitting information between parties as a JSON object.
--> Postman: API development environment used to test and document APIs.
--> Crypto.js: Library used for encryption and decryption.

# Installation

To run this application locally, you need to have Node.js and MongoDB installed on your system.

# Clone the repository:

git clone https://github.com/VinitSrivastava2002/e-commerce-API.git

Navigate to the project directory: cd e-commerce

Install dependencies: npm install

npm install

Start the server: npm run start

Mongo DB

The server should now be running at http://localhost:5000.

# Dependencies

crypto-js : npm install crypto-js@latest
dotenv : npm install dotenv
express: npm install express
jsonwebtoken: npm add jsonwebtoken
mongodb: npm install mongodb@3.7
mongoose: npm install mongoose
nodemon: npm install nodemon

# Usage

--> Register a new user using the /api/register endpoint.
--> Log in with the registered user using the /api/login endpoint to obtain a JWT token.
--> Use the obtained JWT token to access protected endpoints such as creating, updating, or deleting products, categories, and orders.
--> Test the API endpoints using Postman or any other API testing tool.

# API Documentation

For detailed API documentation, please refer to the API documentation.

# License

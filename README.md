**USER and PRODUCT Management**

**Installation**

Clone the repository:
```
git clone https://github.com/PRAVEEN-N/nodeTask.git
```
**Install the dependencies:**

```
cd nodeTask
npm install
```
**Database Setup**

In order to set up and connect to the database for this project, you will need to configure the following details:
- **Host**: Represents the hostname where your database server is running.
- **User**: This is the username that has the rights to access and perform operations on the specified database.
- **Password**: Password associated with the username provided.
- **Database**: It represents the specific database on which operations are supposed to be performed.

The configuration is located at nodetask/src/config
```
module.exports = {
    db: {
        host: <hostname>,
        user: <username>,
        password: <password>,
        database: <db_name>
    },
    //... Rest of the code
};
```
Start the server:

```
npm start
```
The server will start running on http://localhost:3000.

**USER and PRODUCT Management APIs**


**Authentication**

#### Register
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "pavan",
    "email": "pavan@gmail.com",
    "password": "12345678",
    "role": "staff"
  }
- **Response:**
  ```json
  {
    "message": "User created",
    "user": {
        "id": 5,
        "username": "pavan",
        "email": "pavan@gmail.com",
        "role": "staff",
        "updatedAt": "2024-04-11T02:55:54.978Z",
        "createdAt": "2024-04-11T02:55:54.978Z"
    }
  }



#### Login
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
  "email": "pavan@gmail.com",
  "password": "12345678"
  }

  
- **Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJwYXZhbiIsImVtYWlsIjoicGF2YW5AZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNzEyODA0NjkxLCJleHAiOjE3MTI4MDgyOTF9.B9dWbROZiRuaeL4U_pA_RlDEL2US3GRYEJCKWzSvkVo",
    "user": {
        "id": 5,
        "username": "pavan",
        "email": "pavan@gmail.com",
        "role": "staff",
        "createdAt": "2024-04-11T02:55:54.000Z",
        "updatedAt": "2024-04-11T02:55:54.000Z"
    }
  }



### Products

#### Create Product
- **Endpoint:** `POST /api/products`
- **Headers:**
  - `Authorization: <token>`
- **Body:**
  ```json
  {
    "title": "LG Washing Machine",
  "description": "High-efficiency front-load washing machine",
  "inventory": 10
  }
- **Response:**
  ```json
  {
    "id": 3,
    "title": "LG Washing Machine",
    "description": "High-efficiency front-load washing machine",
    "inventory": 10,
    "userId": 1,
    "updatedAt": "2024-04-11T03:56:04.551Z",
    "createdAt": "2024-04-11T03:56:04.551Z"
  }

#### Get Products
- **Endpoint:** `GET /api/products`
- **Headers:**
  - `Authorization: <token>`
  
- **Response:**
  ```json
  [{
        "id": 2,
        "title": "SAMSUNG Washing Machine",
        "description": "High-efficiency top-load washing machine",
        "inventory": 5,
        "userId": 1,
        "createdAt": "2024-04-11T03:03:55.000Z",
        "updatedAt": "2024-04-11T03:04:23.000Z"
    },
    {
        "id": 3,
        "title": "LG Washing Machine",
        "description": "High-efficiency front-load washing machine",
        "inventory": 10,
        "userId": 1,
        "createdAt": "2024-04-11T03:56:04.000Z",
        "updatedAt": "2024-04-11T03:56:04.000Z"
    }]

#### Update Product
- **Endpoint:** `PUT /api/products/:id`
- **Headers:**
  - `Authorization: <token>`
- **Body:**
  ```json
  {
  "title": "SAMSUNG Washing Machine",
  "description": "High-efficiency top-load washing machine",
  "inventory": 10
  }
- **Response:**
  ```json
  {
    "id": 2,
    "title": "SAMSUNG Washing Machine",
    "description": "High-efficiency top-load washing machine",
    "inventory": 10,
    "userId": 1,
    "createdAt": "2024-04-11T03:03:55.000Z",
    "updatedAt": "2024-04-11T03:04:23.000Z"
  }

#### Delete Product
- **Endpoint:** `DELETE /api/products/:id`
- **Headers:**
  - `Authorization: <token>`
- **Response:**
  ```json
  {
    "message": "Product deleted"
  }
  
### Error Handling
The API handles errors and returns appropriate HTTP status codes and error messages. For example:
  - **400 Bad Request**: When there are validation errors or missing required fields.
  - **401 Unauthorized**: When the provided JWT token is invalid or expired.
  - **403 Forbidden**: When the user does not have the required permissions to perform an action.
  - **404 Not Found**: When a requested resource (e.g., a product) is not found.


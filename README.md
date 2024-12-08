# Book Catalog System

This project is a Backend Book Catalog System built with a Node.js Express and MongoDB. It provides functionalities to add, list, search, and check the availability of books.

#

## **Table of Contents**
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [API Endpoints](#api-endpoints)
7. [Future Enhancements](#future-enhancements)


## **Features**

- Add new books to the catalog.
- Retrieve a list of all books.
- Search for a book by title.
- Search for a book by author.
- Check book availability.



## **Technologies Used**

- **Node.js** with **Express**
- **MongoDB Atlas** (cloud database)
- **Mongoose**
- **Postman** for API testing
- **CORS** for cross-origin requests

<br>

## **Getting Started**

### Prerequisites
- Node.js installed
- MongoDB Atlas account and connection URL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shahdhesham13/bookStore
   cd bookStore
   ```
2. Navigate to the `backend` folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

4. Configure the MongoDB connection by adding your MongoDB URI in `config.js`:

    ```bash
    export const mongoDBURL = 'mongodb+srv://shahedh13:pass@bookstore/booCollection'
    ```

<br>

## **API Endpoints**

### 1. **Add a New Book**
**Endpoint**: `POST http://localhost:3000/books`  

**Request Body**:
```json
{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "publishYear": 2007,
    "available": true
}
```
**Response**:
```json
{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "publishYear": 2007,
    "available": true,
    "_id": "6756170c93ed93430c1810bd",
    "createdAt": "2024-12-08T22:00:44.048Z",
    "updatedAt": "2024-12-08T22:00:44.048Z",
    "__v": 0
}
```
![Add](img/add.png)

#

### 2. **List All Books**
**Endpoint**: `GET http://localhost:3000/books` 

**Response**:

![List](img/list.png)

#

### 3. **Search for a Book by Title**
**Endpoint**: `GET /books/:title`  
**Example**: `http://localhost:3000/books/Clean Code`

**Response**:

![Search](img/searchTitle.png)

#

### 4. **Search for a Book by Author**
**Endpoint**: `GET /books/:author`  
**Example**: `http://localhost:3000/books/Naguib Mahfouz`

**Response**:

![Search](img/searchAuthor.png)

#

### 5. **Check Book Availability**
**Endpoint**: `GET /books/availability/:title`  
**Example**: `http://localhost:3000/books/availability/hello kitty`

**Response**:
```json
{ "message": "Book is available" }
```
![Availability](img/availablity.png)


#

## **Future Enhancements**
- Build a user-friendly interface frontend to interact with the backend. 
- Add user accounts with login and signup functionality, then enable only admins to manage books and users to borrow
- Extend the backend to allow users to reserve or borrow books.
- Add categories or genres to books to enable filtering by topics.
- Enable users to leave reviews and ratings for books.



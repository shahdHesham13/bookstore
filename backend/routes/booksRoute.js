import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Route to add a new book
router.post("/", async (request, response) => {
    try {
      if ( //check that all required fields are in the request body
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear||
        !request.body.available
        ) 
      {
        return response.status(400).send({
          message: "Complete all required fields to continue",
        });} 

    //create a new book object with the provided data in the request
      const newBook = 
      {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
        available: request.body.available,
      };
      //save the new book to the database
      const book = await Book.create(newBook);
  
      //respond with success code and the created book
      return response.status(201).send(book);
    } 
    catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message }); }
  });

//Route to get all books from database
router.get("/", async (request, response) => {
    try {
      const books = await Book.find({}); //get all books from the database

      //respond with the total count of books and their data
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

//Route to get a book by its title
router.get("/:title", async (request, response) => {
    try {

     //get the book title from the request parameters
      const { title } = request.params;
  
      //find that book in the database
      const book = await Book.findOne({ title })
      return response.status(200).json(book);} 
      
      catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for checking book availability
router.get("/availability/:author", async (request, response) => {
  try {
    const { title } = request.params;

    const book = await Book.findOne({ title });

    //check the book existance
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }

    //check availability
    if (book.available || book.quantity > 0) {
      return response.status(200).json({ message: "Book is available" });
    } else {
      return response.status(200).json({ message: "Book is not available" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to get a book by its Author
router.get("/author/:author", async (request, response) => {
  try {

   //get the book author from the request parameters
    const { author } = request.params;

    //find thier books in the database
    const book = await Book.find({ author })
    return response.status(200).json(book);} 
    
    catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
import express from 'express';
import { PORT , mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY with defult value of * (allows everythig)
app.use(cors());

//get a resource from a server
app.get('/', (request, response) => {
  console.log(request);
  return response.status(200).send('Hola!');
});

//route to create book
app.use('/books', booksRoute);


//connect to MongoDB using mongoose
mongoose.connect(mongoDBURL)
    .then(() => {  //start the server only if connection is successful
     console.log('Successful Connection to Database');
     app.listen(PORT, () => { console.log(`App is listening to port: ${PORT}`); });
    })
    .catch((error) => {console.log(error);});
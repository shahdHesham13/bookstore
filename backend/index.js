import express from 'express';
import { PORT , mongoDBURL} from './config.js';
import mongoose from 'mongoose';

const app = express();


// get is the http method we use to get a resource from a server
app.get('/', (request, response) => {
  console.log(request);
  return response.status(233).send('Welcome To MERN Stack Tutorial');
});

//connect to MongoDB using mongoose
mongoose.connect(mongoDBURL)
    .then(() => {  //start the server only if connection is successful
     console.log('Successful Connection to Database');
     app.listen(PORT, () => { console.log(`App is listening to port: ${PORT}`); });
    })
    .catch((error) => {console.log(error);});
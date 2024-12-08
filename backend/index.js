import express from 'express';
import { PORT } from './config.js';


const app = express();


// get is the http method we use to get a resource from a server
app.get('/', (request, response) => {
  console.log(request);
  return response.status(233).send('Welcome To MERN Stack Tutorial');
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

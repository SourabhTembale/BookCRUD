import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Book } from './model/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();


app.use(express.json());


app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect('mongodb+srv://sourabhtembale:Sourabh2222@cluster69.fhu0q.mongodb.net/')
  .then(() => {
    console.log('App connected to database');
    app.listen(5555, () => {
      console.log(`App is listening to port: ${5555}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
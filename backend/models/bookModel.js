import mongoose from 'mongoose';

//define the schema for each book object
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, //is mandatory
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, //for the time of creation and last editing the book object
  }
);

export const Book = mongoose.model('Book', bookSchema); //export to use this model in other files
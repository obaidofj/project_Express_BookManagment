import express, { Request, Response } from 'express';
import { BookController } from './bookController.js';

export const BookRoutes = express.Router();

const bookController = new BookController();

BookRoutes.get('/', bookController.getAllBooks);
BookRoutes.get('/:id', bookController.getBookById);
BookRoutes.post('/', bookController.addBook);
BookRoutes.put('/:id', bookController.updateBook);
BookRoutes.delete('/:id', bookController.deleteBook);
BookRoutes.get('/search/name', bookController.queryBooksByName);
BookRoutes.get('/search/year', bookController.queryBooksByYear);

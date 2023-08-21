import { Request, Response } from 'express';
import  booksData  from './data/data.js';


export class BookController {
  getAllBooks(req: Request, res: Response) {
    res.json(booksData);
  }

  getBookById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const book = booksData.find((b) => b.id === id);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  }

  addBook(req: Request, res: Response) {
    const { id, title, author, publicationYear } = req.body;

    if (!id || !title || !author || !publicationYear) {
      res.status(400).json({ message: 'All fields are required' });
    } else {
      const newBook = { id, title, author, publicationYear };
      booksData.push(newBook);
      res.status(201).json(newBook);
    }
  }

  updateBook(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { title, author, publicationYear } = req.body;
    const bookIndex = booksData.findIndex((b) => b.id === id);

    if (bookIndex === -1) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      const updatedBook = {
        id,
        title: title || booksData[bookIndex].title,
        author: author || booksData[bookIndex].author,
        publicationYear: publicationYear || booksData[bookIndex].publicationYear,
      };

      booksData[bookIndex] = updatedBook;
      res.json(updatedBook);
    }
  }

  deleteBook(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const bookIndex = booksData.findIndex((b) => b.id === id);

    if (bookIndex === -1) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      const deletedBook = booksData.splice(bookIndex, 1);
      res.json(deletedBook[0]);
    }
  }

  queryBooksByName(req: Request, res: Response) {
    const name = req.query.name?.toString().toLowerCase() || ''; 
    const matchedBooks = booksData.filter(
      (book) => book.title.toLowerCase().includes(name)
    );

    res.json(matchedBooks);
  }

  queryBooksByYear(req: Request, res: Response) {
    const year = parseInt(req.query.year as string);
    const matchedBooks = booksData.filter((book) => book.publicationYear === year);

    res.json(matchedBooks);
  }
}

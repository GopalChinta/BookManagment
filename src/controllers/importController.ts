import { Request, Response } from 'express';
import * as bookService from '../services/bookService';
import csv from 'csv-parser';
import fs from 'fs';
import { UPLOAD_DIR } from '../config/environment';

export const importBooks = (req: Request, res: Response) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const importedBooks: { title: string; author: string; isbn: string }[] = [];

  fs.createReadStream(`${UPLOAD_DIR}${file.filename}`)
    .pipe(csv())
    .on('data', (data) => {
      importedBooks.push({
        title: data.title,
        author: data.author,
        isbn: data.isbn,
      });
    })
    .on('end', () => {
      const newBooks = bookService.importBooks(importedBooks);
      res.status(200).json({ message: 'Books imported', books: newBooks });
    });
};

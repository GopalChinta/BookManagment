Sure! Here's a detailed `README.md` tailored to your Creuto Assignment Reference Document for the **Simple Book Management REST API** project:

```markdown
# 📚 Simple Book Management REST API

This project implements a RESTful API using **Node.js**, **Express**, and **TypeScript** to manage a collection of books. It supports full CRUD operations, bulk import of books via CSV with validation, and includes bonus features like centralized error handling, request logging, and unit testing.

---

## 📝 Overview

The API allows you to:
- Create, read, update, and delete individual book records.
- Bulk import books via CSV uploads with detailed validation and error reporting.
- Fetch books by ID or get the full list.
- Use environment variables for configuration.
- Benefit from centralized error handling and HTTP request logging.

---

## 🚀 Features

- **CRUD Operations** for books.
- **CSV Bulk Import** with validation and error reporting.
- **TypeScript** for type safety.
- **Morgan** middleware for HTTP request logging.
- Centralized **error handling middleware**.
- **Unit tests** with Jest for key endpoints.
- Environment variable support.
- Organized **MVC/service-based architecture**.

---

## 🛠️ Tech Stack

- Node.js
- Express
- TypeScript
- Multer (file upload)
- Morgan (logging)
- UUID (unique IDs)
- Jest (unit testing)
- Dotenv (environment variables)

---

## 📁 Project Structure

```

book-management-api/
│
├── controllers/
│   ├── bookController.ts
│   └── importController.ts
│
├── models/
│   └── bookModel.ts
│
├── routes/
│   └── bookRoutes.ts
│
├── services/
│   └── bookService.ts
│
├── middleware/
│   ├── errorHandler.ts
│   └── logger.ts
│
├── tests/
│   └── bookController.test.ts
│
├── config/
│   ├── environment.ts
│   └── morgan.ts
│
├── app.ts
├── package.json
└── tsconfig.json

````

---

## ⚙️ Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/GopalChinta/book-management-api.git
   cd book-management-api
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   PORT=5000
   ```

4. **Start development server:**

   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

| Method | Endpoint        | Description               | Request Body / Params              | Status Codes  |
| ------ | --------------- | ------------------------- | ---------------------------------- | ------------- |
| GET    | `/books`        | Get all books             | None                               | 200, 500      |
| GET    | `/books/:id`    | Get book by ID            | `id`: UUID                         | 200, 404, 500 |
| POST   | `/books`        | Add new book              | `{ title, author, publishedYear }` | 201, 400, 500 |
| PUT    | `/books/:id`    | Update book by ID         | `id`: UUID, updated book data      | 200, 404, 500 |
| DELETE | `/books/:id`    | Delete book by ID         | `id`: UUID                         | 200, 404, 500 |
| POST   | `/books/import` | Bulk import books via CSV | CSV file (multipart/form-data)     | 200, 400, 500 |

---

## 📋 CSV Upload Format

The CSV file must include columns:

```
title,author,publishedYear
The Hobbit,J.R.R. Tolkien,1937
1984,George Orwell,1949
```

Upload the file with the form field name `file` to:

```
POST /books/import
```

---

## 🧪 Running Tests

Run Jest tests with:

```bash
npm test
```

---

## 📖 Usage Examples

### Get all books

```bash
curl http://localhost:5000/books
```

### Add a new book

```bash
curl -X POST http://localhost:5000/books \
  -H 'Content-Type: application/json' \
  -d '{"title":"Book Title","author":"Author Name","publishedYear":2023}'
```

### Upload books CSV via Postman

* Method: POST
* URL: `http://localhost:5000/books/import`
* Body: form-data

  * Key: `file` (type: file)
  * Value: Select your CSV file

---

## 🙋‍♂️ Author

Created by GopalChinta.
Feel free to contribute or report issues!

---

## ⭐ License

MIT License

---

```

If you want, I can also help generate example test files or controller templates for your project!
```




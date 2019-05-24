const express = require('express');
const bookRoute = express.Router();

const {getAllBook,
        addBook,
        editBook,
        updateBook,
        deleteBook}  = require('../controllers/bookController');

bookRoute.get('/', getAllBook);

bookRoute.post('/add', addBook);

bookRoute.get('/edit/:id', editBook);

bookRoute.post('/update/:id', updateBook);

bookRoute.get('/delete/:id', deleteBook);

module.exports = bookRoute;

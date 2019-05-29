const formidable = require("formidable");
const fs = require("fs");

//подключить Book
const Book = require('../models/Book');

const sortingBook = (books) => {
    return books.sort((a,b) => {
        if (a.titleBook > b.titleBook) {
            return 1;
        }
        if (a.titleBook < b.titleBook) {
            return -1;
        }
        return 0;
    })
};

exports.getAllBook = (req, res) => {
    Book.find((err, books) => {
        sortingBook(books);
        err ? console.log(err) : res.json(books)
    })
};

exports.addBook = (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json('Книга успешно добавлена')
        })
        .catch(err => {
            res.status(400).send('Не удается сохранить в базу данных');
        })
};


exports.editBook = (req, res) => {
    const id = req.params.id;
    Book.findById(id, (err, book) => {
        res.json(book);
    })
};

exports.updateBook = (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (!book) {
            return next(new Error('Документ не загрузился'))
        } else {
            book.titleBook = req.body.titleBook;
            book.authorBook = req.body.authorBook;
            book.description = req.body.description;
            book.publishing = req.body.publishing;
            book.series = req.body.series;
            book.idBook = req.body.idBook;

            book.save().then(book => {
                res.json('Обновление завершено')
            })
                .catch(err => {
                    res.status(404).send('Не удалось обновить БД');
                })
        }
    })
};

exports.deleteBook = (req, res) => {
    Book.findByIdAndRemove({_id: req.params.id},
        (err, book) => {
            err ? res.json(err) : res.json(req.params.id)
        });
};

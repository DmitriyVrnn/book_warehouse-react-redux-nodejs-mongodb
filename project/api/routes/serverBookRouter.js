const express = require('express');
const app = express();
const serverBookRouter = express.Router();

const Book = require('../models/book');

serverBookRouter.route('/add').post((req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json('Книга успешно добавлена')
        })
        .catch(err => {
            res.status(400).send('Не удается сохранить в базу данных');
        })
});

serverBookRouter.route('/').get((req, res) => {
    Book.find((err, books) => {
        err ? console.log(err) : res.json(books);
    })
});

serverBookRouter.route('/edit/:id').get((req, res) => {
    const id = req.params.id;
    Book.findById(id, (err, book) => {
        res.json(book);
    })
});

serverBookRouter.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (!book) {
            return next(new Error('Документ не загрузился'))
        } else {
            book.titleBook = req.body.titleBook;
            book.authorBook = req.body.authorBook;
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
});

serverBookRouter.route('/delete/:id').get((req, res) => {
    Book.findByIdAndRemove({_id: req.params.id},
        (err, book) => {
            err ? res.json(err) : res.json('Удаление выполнено')
        });
});

module.exports = serverBookRouter;

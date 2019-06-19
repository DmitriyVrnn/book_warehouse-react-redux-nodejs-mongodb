//Модель - "книга"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Описываем книгу
const Book = new Schema({
    titleBook: {
        type: String,
        required: true
    },
    image : {
        data: Buffer,
        contentType: String
    },
    authorBook: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishing: {
        type: String
    },
    series: {
        type: String
    },
    idBook: {
        type: String,
        unique: true
    }
}, {
    collection: 'books' //books - коллекция в базе данных
});


Book.plugin(uniqueValidator);

module.exports = mongoose.model('book', Book);

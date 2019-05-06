const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String,
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: String,
    }
}, {
    collection: 'posts'
});

module.exports = mongoose.model('Post', PostSchema);
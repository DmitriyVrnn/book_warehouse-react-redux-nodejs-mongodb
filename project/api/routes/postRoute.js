const express = require('express');
const app = express();
const postRoute = express.Router();

const Post = require('../models/Post');

postRoute.route('/add').post((req, res) => {
    const post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).send('Не удается добавить пост в базу данных')
        })
});

postRoute.route('/').get((req, res) => {
    Post.find((err, posts) => {
        err ? console.log(err) : res.json(posts)
    })
});

postRoute.route('/delete/:id').get((req, res) => {
    Post.findByIdAndRemove({_id: req.params.id},
        (err, post) => {
            err ? res.json(err) : res.json(req.params.id)
        })
});

module.exports = postRoute;

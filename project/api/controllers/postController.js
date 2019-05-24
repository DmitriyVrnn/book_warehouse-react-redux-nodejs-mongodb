const Post = require('../models/Post');

exports.addPost = (req, res) => {
    const post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).send('Не удается добавить пост в базу данных')
        })
};

exports.getAllPost = (req, res) => {
    Post.find((err, posts) => {
        err ? console.log(err) : res.json(posts)
    })
};

exports.deletePost = (req, res) => {
    Post.findByIdAndRemove({_id: req.params.id},
        (err, post) => {
            err ? res.json(err) : res.json(req.params.id)
        })
};